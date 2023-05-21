import type { Equals, ObjectFromEntries } from "../index.ts";
import { objectFromEntries } from "../objectFromEntries.ts";
import { assert } from "../assert.ts";
import { id } from "../id.ts";

{
    const entries = [
        ["a", "foo"],
        ["b", 33],
        ["c", true],
    ] as const;

    const obj = objectFromEntries(entries);

    assert<
        Equals<
            typeof obj,
            {
                a: "foo";
                b: 33;
                c: true;
            }
        >
    >();
}

{
    const entries = [
        ["a", id<string>("foo")],
        ["b", id<number>(33)],
        ["c", id<boolean>(true)],
    ] as const;

    const obj = objectFromEntries(entries);

    assert<
        Equals<
            typeof obj,
            {
                a: string;
                b: number;
                c: boolean;
            }
        >
    >();
}

{
    type Entry = readonly ["a", string] | readonly ["b", number];

    type O = ObjectFromEntries<Entry>;

    assert<
        Equals<
            O,
            {
                a: string;
                b: number;
            }
        >
    >();
}
