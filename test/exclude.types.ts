/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { exclude } from "../src/exclude";
import { assert } from "../src/assert";
import type { Equals } from "../src/Equals";

{
    const x = (["a", "b", "c"] as const).filter(exclude(["a"]));

    type Got = typeof x;
    type Expected = ("b" | "c")[];

    assert<Equals<Got, Expected>>();
}

{
    const x = (["a", "b", "c", "d"] as const).filter(exclude(["a", "b"]));

    type Got = typeof x;
    type Expected = ("c" | "d")[];

    assert<Equals<Got, Expected>>();
}

{
    const x = [3, "a", false].filter(exclude([3]));

    type Got = typeof x;

    type Expected = (number | string | boolean)[];

    assert<Equals<Got, Expected>>();
}

{
    //@ts-expect-error
    const x = (["a", "b", "c", "d"] as const).filter(exclude("a", "b"));
}
