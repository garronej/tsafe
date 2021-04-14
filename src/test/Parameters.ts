/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Parameters } from "../Parameters";
import { doExtends } from "evt/tools/typeSafety/doExtends";

{
    const myFunction = (arg1: unknown, arg2: string, extraParams: { a: number; b: number }) => {
        return {
            arg1,
            arg2,
            extraParams,
        };
    };

    type Expected = [arg1: unknown, arg2: string, extraParams: { a: number; b: number }];
    type Got = Parameters<typeof myFunction>;

    doExtends<Expected, Got>();
    doExtends<Got, Expected>();
}

{
    type A = {
        a: number;
        method: (arg1: number, arg2?: string) => void;
    };

    type Expected = [arg1: number, arg2?: string | undefined]; // [number] | [number, string | undefined]
    type Got = Parameters<A["method"]>;

    doExtends<Expected, Got>();
    doExtends<Got, Expected>();

    //@ts-expect-error
    type X = Parameters<A>;
}

//@ts-expect-error
type X = Parameters<string>;

{
    type Expected = [searchString: string, position?: number | undefined];
    type Got = Parameters<string["indexOf"]>;

    doExtends<Expected, Got>();
    doExtends<Got, Expected>();
}
