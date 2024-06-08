import { isAmong } from "../src/isAmong";
import { Reflect } from "../src/Reflect";
import { assert, type Equals } from "../src/assert";

{
    const names = ["a", "b", "c"] as const;
    type Name = (typeof names)[number];

    const value = Reflect<unknown>();

    if (isAmong(names, value)) {
        assert<Equals<typeof value, Name>>();
    }
}

{
    const names = ["a", "b", "c"] as const;

    const value = Reflect<"a" | "b" | "d">();

    if (isAmong(names, value)) {
        assert<Equals<typeof value, "a" | "b">>();
    }
}

{
    const value = Reflect<unknown>();

    if (isAmong(["a", 33, null, undefined], value)) {
        assert<Equals<typeof value, "a" | 33 | null | undefined>>();
    }
}

{
    type Name = "a" | "b" | "c";

    const names = ["a", "b", "c"] as const;

    assert<Equals<(typeof names)[number], Name>>();

    const value = Reflect<unknown>();

    if (isAmong(names, value)) {
        assert<Equals<typeof value, Name>>();
    }
}
