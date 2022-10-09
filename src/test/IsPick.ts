/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Equals } from "../Equals";
import type { IsPick } from "../IsPick";
import { assert } from "../assert";

const emptyObj = {};

type EmptyObj = typeof emptyObj;

type Obj = Record<string, unknown>;

class A {
    a = 1;
}

{
    type MyObj = {
        x: string;
        y: { a: "x" | "y" };
        z: number[];
    };

    {
        type PickOfMyObj = Pick<MyObj, "y" | "z">;

        assert<IsPick<PickOfMyObj, MyObj>>();

        //@ts-expect-error: This isn't true
        assert<IsPick<MyObj, PickOfMyObj>>();
    }

    {
        type PickOfMyObjWithExtraProp = Pick<MyObj, "y" | "z"> & { u: string[] };

        //@ts-expect-error: This isn't true
        assert<IsPick<PickOfMyObjWithExtraProp, MyObj>>();
    }

    {
        type PickOfMyObjWithExtraProp = { y: { a: "x" | "y" | "z" }; x: string };

        //@ts-expect-error: there is an extra "z"
        assert<IsPick<PickOfMyObjWithExtraProp, MyObj>>();
    }

    {
        // eslint-disable-next-line @typescript-eslint/ban-types
        type EmptyObject = {};

        assert<IsPick<EmptyObject, MyObj>>();
    }
}

{
    // identity
    assert<Equals<IsPick<any[], any[]>, true>>();
    assert<Equals<IsPick<Obj, Obj>, true>>();
    assert<Equals<IsPick<A, A>, true>>();
}

{
    // never picks only never
    assert<Equals<IsPick<never, any>, false>>();
    assert<Equals<IsPick<never, unknown>, false>>();
}

{
    // arrays
    assert<Equals<IsPick<any[], any[]>, true>>();
    assert<Equals<IsPick<[], []>, true>>();
    assert<Equals<IsPick<any[], []>, false>>();
    assert<Equals<IsPick<[], any[]>, false>>();
    assert<Equals<IsPick<[], [any]>, false>>();
    assert<Equals<IsPick<[any], any[]>, false>>();
    assert<Equals<IsPick<[any], []>, false>>();
    assert<Equals<IsPick<[1], [number]>, false>>();
    assert<Equals<IsPick<[number], [1]>, false>>();

    assert<Equals<IsPick<[1], [1]>, true>>();
    assert<Equals<IsPick<[1], [2]>, false>>();

    assert<Equals<IsPick<[1, ""], [number, string]>, false>>();
    assert<Equals<IsPick<[1, ""], [number, any]>, false>>();
    assert<Equals<IsPick<[1, ""], [number, never]>, false>>();
    assert<Equals<IsPick<[number, string], [1, ""]>, false>>();
    assert<Equals<IsPick<[number, any], [1, ""]>, false>>();
    assert<Equals<IsPick<[number, never], [1, ""]>, false>>();
}

{
    // objects
    assert<Equals<IsPick<A, EmptyObj>, false>>();
    assert<Equals<IsPick<EmptyObj, A>, true>>();

    assert<Equals<IsPick<EmptyObj, { a: 1 }>, true>>();
    assert<Equals<IsPick<{ a: 1 }, EmptyObj>, false>>();
    assert<Equals<IsPick<{ a: 1 }, { a: number }>, false>>();
    assert<Equals<IsPick<{ a: 1 }, { a: string }>, false>>();

    assert<Equals<IsPick<{ a: string }, { a: string; b: string }>, true>>();
    assert<Equals<IsPick<{ a?: string }, { a?: string; b: string }>, true>>();
    assert<Equals<IsPick<{ a: string }, { a?: string }>, false>>();
    assert<Equals<IsPick<{ a?: string }, { a: string }>, false>>();
    assert<Equals<IsPick<Pick<{ a: string; b: string }, "a">, { a: string; b: string }>, true>>();
    assert<Equals<IsPick<Pick<{ a: string; b: string }, "a" | "b">, { a: string; b: string }>, true>>();
    assert<Equals<IsPick<{ a: { b: string } }, { a: { b: string } }>, true>>();

    assert<Equals<IsPick<{ a: "a" | "b" }, { a: "a" | "b" }>, true>>();
    assert<Equals<IsPick<{ a: "a" | "b" | "c" }, { a: "a" | "b" }>, false>>();
    assert<Equals<IsPick<{ a: "a" }, { a: "a" | "b" }>, false>>();

    assert<Equals<IsPick<Array<{ a: "a" }>, Array<{ a: "a" }>>, true>>();
    assert<Equals<IsPick<Array<{ a: "a" }>, Array<{ a: "b" }>>, false>>();
}
