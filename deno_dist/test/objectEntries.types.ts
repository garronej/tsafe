import type { Equals, ObjectEntries } from "../index.ts";
import { objectEntries } from "../objectEntries.ts";
import { assert } from "../assert.ts";
import { Reflect } from "../Reflect.ts";

{
    const input = Reflect<{
        a: string;
        b: number;
        c: boolean;
    }>();

    const got = objectEntries(input);

    type Expected = (["a", string] | ["b", number] | ["c", boolean])[];

    assert<Equals<typeof got, Expected>>();
}

{
    const input = Reflect<{
        a?: string;
        b: number;
        c: boolean;
    }>();

    const got = objectEntries(input);

    type Expected = (["a", string | undefined] | ["b", number] | ["c", boolean])[];

    assert<Equals<typeof got, Expected>>();
}

{
    const input = {
        "a": "foo",
        "b": 33,
        "c": true,
    } as const;

    assert<Equals<typeof input, { readonly a: "foo"; readonly b: 33; readonly c: true }>>();

    const got = objectEntries(input);

    type Expected = (["a", "foo"] | ["b", 33] | ["c", true])[];

    assert<Equals<typeof got, Expected>>();
}

{
    const input = {};

    const got = objectEntries(input);

    type Expected = never[];

    assert<Equals<typeof got, Expected>>();
}

{
    type Input = { a: string; b: number; c: boolean };

    type Got = ObjectEntries<Input>;

    type Expected = (["a", string] | ["b", number] | ["c", boolean])[];

    assert<Equals<Got, Expected>>();
}

{
    type Input = { a?: string; b: number; c: boolean };

    type Got = ObjectEntries<Input>;

    type Expected = (["a", string | undefined] | ["b", number] | ["c", boolean])[];

    assert<Equals<Got, Expected>>();
}
