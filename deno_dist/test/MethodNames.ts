/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MethodNames } from "../MethodNames.ts";
import { assert } from "../assert.ts";
import type { Equals } from "../Equals.ts";

{
    type A = {
        a: string;
        b: number;

        method1(): void;
        method2?(params: { a: boolean; b: string }): number;
    };

    type Expected = "method1" | "method2";

    type Got = MethodNames<A>;

    assert<Equals<Got, Expected>>();
}

class Car {
    public readonly foo: string;

    constructor() {
        this.foo = "caca";
    }
}

{
    type A = {
        a: unknown;
        b: unknown;
        method1?(): void;
        // eslint-disable-next-line @typescript-eslint/ban-types
        method2: Function;
        method3?: (args: { a: unknown }) => unknown;
        Car: typeof Car;
    };

    type Expected = "method1" | "method3";
    type Got = MethodNames<A>;

    assert<Equals<Got, Expected>>();
}

{
    interface A {
        a: string;
        b: string;

        method1(arg: unknown): unknown;
        method2?: (arg: unknown) => unknown;
    }

    type Expected = "method1" | "method2";
    type Got = MethodNames<A>;

    assert<Equals<Got, Expected>>();
}
