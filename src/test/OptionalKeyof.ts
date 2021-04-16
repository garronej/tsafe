/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { OptionalKeyof } from "../OptionalKeyof";
import { doExtends } from "evt/tools/typeSafety/doExtends";
import type { Any } from "ts-toolbelt";

{
    type A = {
        a: number;
        b: string;
        c?: boolean;
        method1?(...args: unknown[]): unknown;
    };

    type Expected = "c" | "method1";
    type Got = OptionalKeyof<A>;

    doExtends<Any.Equals<Got, Expected>, 1>();
}

{
    type A = {
        a: number;
        b?: number;
        c: number | undefined;
    };

    type Expected = "b";
    type Got = OptionalKeyof<A>;

    doExtends<Any.Equals<Got, Expected>, 1>();
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

{
    type A =
        | {
              a: number;
              b?: number;
          }
        | undefined;

    type Expected = "b";

    //@ts-expect-error
    type Got = OptionalKeyof<A>;

    //@ts-expect-error
    doExtends<Any.Equals<Got, Expected>, 1>();
}

{
    type A = {
        a: number;
        b?: number;
    } | null;

    type Expected = "b";
    //@ts-expect-error
    type Got = OptionalKeyof<A>;

    //@ts-expect-error
    doExtends<Any.Equals<Got, Expected>, 1>();
}
