import { objectKeys } from "../src/objectKeys";
import { assert } from "../src/assert";
import { same } from "evt/tools/inDepth/same";

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

{
    type A = {
        [key: string]: boolean;
    };

    const a: A = { isNormalUser: false, isAdmin: true };

    const got = objectKeys(a);

    const expected = ["isNormalUser", "isAdmin"];

    assert(same(got, expected));

    console.log("PASS TEST 3");
}
