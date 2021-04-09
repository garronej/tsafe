/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { PickOptionals } from "../typeSafety/PickOptional";
import { doExtends } from "evt/tools/typeSafety/doExtends";

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

    doExtends<Expected, Got>();
    doExtends<Got, Expected>();
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

    doExtends<Expected, Got>();
    doExtends<Got, Expected>();
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
