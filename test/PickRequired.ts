/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { PickRequired } from "../src/PickRequired";
import { assert } from "../src/assert";
import type { Equals } from "../src/Equals";

{
    type A = {
        a: number;
        b?: number;
        method1(param: string): number;
        method2?(params: { a: string; b: number }): typeof params;
    };

    type Expected = {
        a: number;
        method1(param: string): number;
    };

    type Got = PickRequired<A>;

    assert<Equals<Got, Expected>>();
}

{
    type A = {
        a: number | undefined;
        b?: string;
    };

    type Expected = {
        a: number | undefined;
    };

    type Got = PickRequired<A>;

    assert<Equals<Got, Expected>>();
}

{
    interface A {
        a: number;
        b: string;
        c?: unknown;
        method1?: () => void;
    }

    //@ts-expect-error
    type Got = PickRequired<A>;
}

//@ts-expect-error
type X = PickRequired<number>;
