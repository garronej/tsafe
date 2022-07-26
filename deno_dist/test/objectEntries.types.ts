import type { Equals, ObjectEntries } from "../index.ts";
import { objectEntries } from "../objectEntries.ts";
import { assert } from "../assert.ts";

{
    const o = {
        "a": "foo",
        "b": 33,
        "c": true,
    };

    const entries = objectEntries(o);

    assert<Equals<typeof entries, ["a", string] | ["b", number] | ["c", boolean]>>();
}

{
    const o = {
        "a": "foo",
        "b": 33,
        "c": true,
    } as const;

    const entries = objectEntries(o);

    assert<Equals<typeof entries, ["a", "foo"] | ["b", 33] | ["c", true]>>();
}

{
    type Input = { a: string; b: number; c: boolean };

    type Expect = ["a", string] | ["b", number] | ["c", boolean];

    assert<Equals<ObjectEntries<Input>, Expect>>();
}
