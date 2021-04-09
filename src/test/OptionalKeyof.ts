/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { OptionalKeyof } from "../typeSafety/OptionalKeyof";
import { doExtends } from "evt/tools/typeSafety/doExtends";

{
    type A = {
        a: number;
        b: string;
        c?: boolean;
        method1?(...args: unknown[]): unknown;
    };

    type Expected = "c" | "method1";
    type Got = OptionalKeyof<A>;

    doExtends<Expected, Got>();
    doExtends<Got, Expected>();
}

{
    interface A {
        a: number;
        b: string;
        c?: boolean;
        method1?: (arg: unknown) => unknown;
    }

    //@ts-expect-error
    type Got = OptionalKeyof<A>;
}

//@ts-expect-error
type X = OptionalKeyof<number>;
