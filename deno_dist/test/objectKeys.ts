import { objectKeys } from "../objectKeys.ts";
import { assert } from "../assert.ts";
import { same } from "https://raw.githubusercontent.com/garronej/evt/v1.9.14/deno_dist/tools/inDepth/same.ts";

{
    type A = {
        a: number;
        b: number;
        c: number;
    };

    const obj: A = {
        "a": 1,
        "b": 2,
        "c": 3,
    };

    const got = objectKeys(obj);

    const expected = ["a", "b", "c"];

    assert(same(got, expected));

    console.log("PASS TEST 1");
}

{
    const obj = {
        "a": 1,
        "b": 2,
        "c": 3,
    };

    const got = objectKeys<{ a: number; b: number }>(obj);

    const expected = ["a", "b", "c"];

    assert(same(got, expected));

    console.log("PASS TEST 2");
}
