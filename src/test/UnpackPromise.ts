/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { UnpackPromise } from "../UnpackPromise";
import { doExtends } from "../doExtends";
import type { Any } from "ts-toolbelt";

//@ts-ignore
function test<T>() {
    const prT = new Promise<T>(resolve => setTimeout(resolve, 1));

    type Expected = T;
    type Got = UnpackPromise<typeof prT>;

    doExtends<Any.Equals<Got, Expected>, 1>();
}

//@ts-ignore
function test<T>() {
    const f = async () => {
        const out: T = null as any;
        return out;
    };

    const prT = f();

    type Expected = T;
    type Got = UnpackPromise<typeof prT>;

    doExtends<Any.Equals<Got, Expected>, 1>();
}

{
    type Got = UnpackPromise<undefined | null | false | "">;
    type Expected = never;

    doExtends<Any.Equals<Got, Expected>, 1>();
}

{
    //@ts-expect-error
    type Got = UnpackPromise<string>;
}
