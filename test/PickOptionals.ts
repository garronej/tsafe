import type { PickOptionals } from "../src/PickOptionals";
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
        b: number;
        method2(params: { a: string; b: number }): typeof params;
    };
    type Got = PickOptionals<A>;

    assert<Equals<Got, Expected>>();
}

{
    type A = {
        a: number | undefined;
        b?: string;
    };

    type Expected = {
        b: string;
    };
    type Got = PickOptionals<A>;

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
    type Got = PickOptionals<A>;
}

//@ts-expect-error
type X = PickOptionals<number>;
