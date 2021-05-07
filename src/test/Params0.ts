/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Param0 } from "../Param0";
import { doExtends } from "../doExtends";
import type { Any } from "ts-toolbelt";

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

    doExtends<Any.Equals<Got, Expected>, 1>();
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

    doExtends<Any.Equals<Got, Expected>, 1>();
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

    doExtends<Any.Equals<Got, Expected>, 1>();
}
