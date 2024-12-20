import type { Parameters } from "../src/Parameters";
import { assert } from "../src/assert";
import type { Equals } from "../src/Equals";

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

    assert<Equals<Got, Expected>>();
}

{
    type A = {
        a: number;
        method: (arg1: number, arg2?: string) => void;
    };

    type Expected = [arg1: number, arg2?: string | undefined]; // [number] | [number, string | undefined]
    type Got = Parameters<A["method"]>;

    assert<Equals<Got, Expected>>();
}

{
    //@ts-expect-error
    type X = Parameters<string>;
}

{
    type Expected = [searchString: string, position?: number | undefined];
    type Got = Parameters<string["indexOf"]>;

    assert<Equals<Got, Expected>>();
}

{
    class A {
        a: string;
        constructor(a: string) {
            this.a = a;
        }
    }

    //@ts-expect-error
    type Got = Parameters<A>;
}
