import { exclude } from "../src/exclude";
import { assert } from "../src/assert";
import { same } from "evt/tools/inDepth/same";

{
    const got = ["a", "b", "c"].filter(exclude("a"));

    const expected = ["b", "c"];

    assert(same(got, expected));

    console.log("PASS TEST 1");
}

{
    const got = ["a", "b", "c"].filter(exclude(["a"]));

    const expected = ["b", "c"];

    assert(same(got, expected));

    console.log("PASS TEST 2");
}

{
    const got = [1, 2, 3].filter(exclude("foo"));

    const expected = [1, 2, 3];

    assert(same(got, expected));

    console.log("PASS TEST 3");
}

{
    const got = ["a", "b", "c", "d"].filter(exclude(["a", "b"]));

    const expected = ["c", "d"];

    assert(same(got, expected));

    console.log("PASS TEST 4");
}
