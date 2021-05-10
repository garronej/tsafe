/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { PickOptionals } from "../PickOptional.ts";
import { doExtends } from "../doExtends.ts";
import type { Any } from "ts-toolbelt DENOIFY: DEPENDENCY UNMET (DEV DEPENDENCY)";

{
    type A = {
        a: number;
        b?: number;
        method1(param: string): number;
        method2?(params: { a: string; b: number }): typeof params;
    };

    type Expected = {
        b: number | undefined;
        method2: ((params: { a: string; b: number }) => typeof params) | undefined;
    };
    type Got = PickOptionals<A>;

    doExtends<Any.Equals<Got, Expected>, 1>();
}

{
    type A = {
        a: number | undefined;
        b?: string;
    };

    type Expected = {
        b: string | undefined;
    };
    type Got = PickOptionals<A>;

    doExtends<Any.Equals<Got, Expected>, 1>();
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
