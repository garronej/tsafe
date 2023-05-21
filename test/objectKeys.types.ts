/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { objectKeys } from "../src/objectKeys";
import { assert } from "../src/assert";
import type { Equals } from "../src/Equals";

{
    const obj = {
        "a": 1,
        "b": "ok",
        "c": null,
    };

    const x = objectKeys(obj);

    type Expected = ("a" | "b" | "c")[];

    type Got = typeof x;

    assert<Equals<Got, Expected>>();
}

{
    type A = {
        a: number;
        b: string;
        c: null;
    };
    const obj: A = {
        "a": 1,
        "b": "ok",
        "c": null,
    };

    const x = objectKeys<{ a: number; b: string }>(obj);

    type Expected = ("a" | "b")[];

    type Got = typeof x;

    assert<Equals<Got, Expected>>();
}

{
    interface A {
        a: number;
        b: string;
        c: null;
    }

    const obj: A = {
        "a": 1,
        "b": "ok",
        "c": null,
    };

    //@ts-expect-error
    const x = objectKeys(obj);
}

{
    class A {
        a: number;
        b: string;
        c: null;

        constructor(a: number, b: string, c: null) {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }

    const obj: A = new A(1, "ok", null);

    //@ts-expect-error
    const x = objectKeys(obj);
}

{
    const obj = {};

    const x = objectKeys(obj);

    type Expected = never[];

    type Got = typeof x;

    assert<Equals<Got, Expected>>();
}

{
    const x = "ok";

    //@ts-expect-error
    const got = objectKeys(x);
}

{
    const x = 1;

    //@ts-expect-error
    const got = objectKeys(x);
}

{
    const x = true;

    //@ts-expect-error
    const got = objectKeys(x);
}
