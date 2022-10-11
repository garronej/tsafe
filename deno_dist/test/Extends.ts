/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Equals } from "../Equals.ts";
import type { Extends } from "../Extends.ts";
import { assert } from "../assert.ts";

const emptyObj = {};

type EmptyObj = typeof emptyObj;

type Fn<A extends any[] = any[], R = any> = (...args: A) => R;

type Obj = Record<string, unknown>;

function fn() {
    return undefined;
}

class A {
    a = 1;
}

{
    // identity
    assert<Equals<Extends<any, any>, true>>();
    assert<Equals<Extends<never, never>, true>>();
    assert<Equals<Extends<unknown, unknown>, true>>();
    assert<Equals<Extends<void, void>, true>>();
    assert<Equals<Extends<undefined, undefined>, true>>();
    assert<Equals<Extends<null, null>, true>>();
    assert<Equals<Extends<boolean, boolean>, true>>();
    assert<Equals<Extends<number, number>, true>>();
    assert<Equals<Extends<string, string>, true>>();
    assert<Equals<Extends<symbol, symbol>, true>>();
    assert<Equals<Extends<any[], any[]>, true>>();
    assert<Equals<Extends<Fn, Fn>, true>>();
    assert<Equals<Extends<Obj, Obj>, true>>();
    assert<Equals<Extends<A, A>, true>>();
}

{
    // never extends everything
    assert<Equals<Extends<never, never>, true>>();
    assert<Equals<Extends<never, any>, true>>();
    assert<Equals<Extends<never, unknown>, true>>();
    assert<Equals<Extends<never, 1>, true>>();

    // nothing but itself extends never
    assert<Equals<Extends<never, never>, true>>();
    assert<Equals<Extends<any, never>, false>>();
    assert<Equals<Extends<unknown, never>, false>>();
    assert<Equals<Extends<1, never>, false>>();

    // any extends nothing but itself and unknown
    assert<Equals<Extends<any, any>, true>>();
    assert<Equals<Extends<any, never>, false>>();
    assert<Equals<Extends<any, unknown>, true>>();
    assert<Equals<Extends<any, 1>, false>>();

    // unknown extends nothing but itself and any
    assert<Equals<Extends<unknown, unknown>, true>>();
    assert<Equals<Extends<unknown, never>, false>>();
    assert<Equals<Extends<unknown, any>, true>>();
    assert<Equals<Extends<unknown, 1>, false>>();

    // everything extends any
    assert<Equals<Extends<never, any>, true>>();
    assert<Equals<Extends<unknown, any>, true>>();
    assert<Equals<Extends<1, any>, true>>();

    // everything extends unknown
    assert<Equals<Extends<any, unknown>, true>>();
    assert<Equals<Extends<never, unknown>, true>>();
    assert<Equals<Extends<1, unknown>, true>>();
}

{
    // numbers
    assert<Equals<Extends<1, number>, true>>();
    assert<Equals<Extends<number, 1>, false>>();
}

{
    // functions
    assert<Equals<Extends<() => any, Fn>, true>>();
    assert<Equals<Extends<() => void, Fn>, true>>();
    assert<Equals<Extends<(...args: any[]) => any, Fn>, true>>();
    assert<Equals<Extends<typeof fn, Fn>, true>>();

    assert<Equals<Extends<unknown, Fn>, false>>();
    assert<Equals<Extends<void, Fn>, false>>();
    assert<Equals<Extends<undefined, Fn>, false>>();
    assert<Equals<Extends<null, Fn>, false>>();
    assert<Equals<Extends<boolean, Fn>, false>>();
    assert<Equals<Extends<number, Fn>, false>>();
    assert<Equals<Extends<string, Fn>, false>>();
    assert<Equals<Extends<any[], Fn>, false>>();
    assert<Equals<Extends<Record<string, unknown>, Fn>, false>>();
    assert<Equals<Extends<A, Fn>, false>>();
}

{
    // arrays
    assert<Equals<Extends<any[], any[]>, true>>();
    assert<Equals<Extends<[], []>, true>>();
    assert<Equals<Extends<any[], []>, false>>();
    assert<Equals<Extends<[], any[]>, true>>();
    assert<Equals<Extends<[], [any]>, false>>();
    assert<Equals<Extends<[any], any[]>, true>>();
    assert<Equals<Extends<[any], []>, false>>();

    assert<Equals<Extends<[1], [number]>, true>>();
    assert<Equals<Extends<[number], [1]>, false>>();
    assert<Equals<Extends<[1], [1]>, true>>();
    assert<Equals<Extends<[1], [2]>, false>>();

    assert<Equals<Extends<[1, ""], [number, string]>, true>>();
    assert<Equals<Extends<[1, ""], [number, any]>, true>>();
    assert<Equals<Extends<[1, ""], [number, never]>, false>>();
    assert<Equals<Extends<[number, string], [1, ""]>, false>>();
    assert<Equals<Extends<[number, any], [1, ""]>, false>>();
    assert<Equals<Extends<[number, never], [1, ""]>, false>>();
}

{
    // objects
    assert<Equals<Extends<A, EmptyObj>, true>>();
    assert<Equals<Extends<EmptyObj, A>, false>>();

    assert<Equals<Extends<A, Record<string, any>>, true>>();
    assert<Equals<Extends<Record<string, any>, A>, false>>();

    assert<Equals<Extends<A, unknown>, true>>();
    assert<Equals<Extends<unknown, A>, false>>();

    assert<Equals<Extends<EmptyObj, { a: 1 }>, false>>();
    assert<Equals<Extends<{ a: 1 }, EmptyObj>, true>>();
    assert<Equals<Extends<{ a: 1 }, { a: number }>, true>>();
    assert<Equals<Extends<{ a: 1 }, { a: string }>, false>>();
}
