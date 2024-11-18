import type { UnpackPromise } from "../src/UnpackPromise";
import { assert } from "../src/assert";
import type { Equals } from "../src/Equals";

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
