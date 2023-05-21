/* eslint-disable @typescript-eslint/no-explicit-any */
import { flip } from "../src/flip";
import { assert } from "../src/assert";

{
    const obj = {
        "is_": true,
        "a": 1,
    };

    const expected = false;

    flip(obj, "is_");

    const got = obj.is_;

    assert(got === expected);

    console.log("PASS TEST 1");
}

{
    const obj = {
        "is_": true,
    };

    const expected = false;

    const got = flip(obj, "is_");

    assert(got === expected);

    console.log("PASS TEST 2");
}

{
    const obj = {
        "a": {
            "is_": true,
            "aa": 1,
        },
    };

    const expected = false;

    flip(obj.a, "is_");

    const got = obj.a.is_;

    assert(got === expected);

    console.log("PASS TEST 3");
}

{
    interface A {
        is_: boolean;
        a: number;
    }

    const obj: A = {
        "a": 1,
        "is_": true,
    };

    const expected = false;

    flip(obj, "is_");

    const got = obj.is_;

    assert(got === expected);

    console.log("PASS TEST 4");
}

{
    class A {
        is_: boolean;
        a: number;

        constructor(is_: boolean, a: number) {
            this.is_ = is_;
            this.a = a;
        }
    }

    const obj = new A(true, 1);

    const expected = false;

    flip(obj, "is_");

    const got = obj.is_;

    assert(got === expected);

    console.log("PASS TEST 5");
}

{
    type A = {
        is_?: boolean;
        a: number;
    };

    const obj: A = {
        "a": 1,
        "is_": true,
    };

    const expected = false;

    flip(obj, "is_");

    const got = obj.is_;

    assert(got === expected);

    console.log("PASS TEST 6");
}

{
    type A = {
        is_?: boolean;
        a: number;
    };

    const obj: A = {
        "a": 1,
    };

    const expected = undefined;

    flip(obj, "is_");

    const got = obj.is_;

    assert(got === expected);

    console.log("PASS TEST 7");
}
