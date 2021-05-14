import { exclude } from "../exclude";
import { assert } from "../assert";
import { same } from "evt/tools/inDepth/same";

{
    const x = ["a", "b", "c"];

    const got = x.filter(exclude("a"));

    const expected = ["b", "c"];

    assert(same(got, expected));

    console.log("PASS TEST 1");
}

{
    const x = ["a", "b", "c"];

    const got = x.filter(exclude(["a"]));

    const expected = ["b", "c"];

    assert(same(got, expected));

    console.log("PASS TEST 2");
}

{
    const x = [1, 2, 3];

    const got = x.filter(exclude("foo"));

    const expected = [1, 2, 3];

    assert(same(got, expected));

    console.log("PASS TEST 3");
}

{
    const x = ["a", "b", "c", "d"] as const;

    const got = x.filter(exclude(["a", "b"]));

    const expected = ["c", "d"];

    assert(same(got, expected));

    console.log("PASS TEST 4");
}
