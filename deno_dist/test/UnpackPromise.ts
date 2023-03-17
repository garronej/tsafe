/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { UnpackPromise } from "../UnpackPromise.ts";
import { assert } from "../assert.ts";
import type { Equals } from "../Equals.ts";

//@ts-ignore
function test<T>() {
    const prT = new Promise<T>(resolve => setTimeout(resolve, 1));

    type Expected = T;
    type Got = UnpackPromise<typeof prT>;

    assert<Equals<Got, Expected>>();
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

    assert<Equals<Got, Expected>>();
}

{
    type Got = UnpackPromise<undefined | null | false | "">;
    type Expected = never;

    assert<Equals<Got, Expected>>();
}

{
    //@ts-expect-error
    type Got = UnpackPromise<string>;
}
