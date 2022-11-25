/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Param0 } from "../Param0.ts";
import { assert } from "../assert.ts";
import type { Equals } from "../Equals.ts";

//@ts-ignore
function test<T, U>() {
    const f = (params: { foo: T; bar: U }) => {
        return params;
    };

    type Expected = {
        foo: T;
        bar: U;
    };

    type Got = Param0<typeof f>;

    assert<Equals<Got, Expected>>();
}

//@ts-ignore
function test<T, U>() {
    const f = (params: { foo: T; bar: U }, a: unknown, b: unknown) => {
        return {
            ...params,
            a,
            b,
        };
    };

    type Expected = {
        foo: T;
        bar: U;
    };

    type Got = Param0<typeof f>;

    assert<Equals<Got, Expected>>();
}

{
    //@ts-expect-error
    type Got = Params<string>;
}

{
    class A {
        foo: number;

        constructor(foo: number) {
            this.foo = foo;
        }
    }

    //@ts-expect-error
    type Got = Params<A>;
}

{
    type Got = Param0<undefined | null | false | "">;
    type Expected = never;

    assert<Equals<Got, Expected>>();
}

{
    type Got = Param0<((params: { foo: string }) => void) | undefined | null | false | "">;
    type Expected = { foo: string };

    assert<Equals<Got, Expected>>();
}

{
    type Got = Param0<(() => void) | undefined | null | false | "">;
    type Expected = void;

    assert<Equals<Got, Expected>>();
}
