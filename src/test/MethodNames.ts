/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { MethodNames } from "../typeSafety/MethodNames";
import { doExtends } from "../typeSafety/doExtends";

{
    type Api = {
        a: number;
        b: string;
        method1(): number;
        method2(arg: string): void;
    };

    type X = MethodNames<Api>; //expect type X to be <<"method1" | "method2">>

    doExtends<X, "method1" | "method2">();

    //@ts-expect-error
    doExtends<X, "method" | "method2">();
}

{
    type Api = {
        a?: {
            aa: string;
            ab: number;
            method1a?(args: { a: string }): number;
        };

        b: boolean;
        method1?(args: { a: number }): boolean;
        method2: () => void;
    };

    type X = MethodNames<Api>; // expect type X to be <<"method1">>

    doExtends<X, "method1" | "method2">();

    //@ts-expect-error
    doExtends<"method1" | "method2" | "method1a", X>();
}

{
    type Api = {
        a?: string;
        b: boolean;
        method1?(arg: number): void;
        method2: () => number;
        method3: (arg: string) => number;
        method4?: (args: { a: number; b: boolean }) => { a: number; b: string; c: boolean };
        method5(args: { a: number; b: boolean }): { a: number; b: string; c: boolean };
    };

    // expect type X to be <<"method1" | "method2" | "method3" | "method4" | "method5">>
    type X = MethodNames<Api>;

    doExtends<X, "method1" | "method2" | "method3" | "method4" | "method5">();

    doExtends<X, "method1" | "method2" | "method3" | "method4" | "method5" | "method6">();

    //@ts-expect-error;
    doExtends<"method1" | "method2" | "method3" | "method4" | "method5" | "method6", X>();
}
