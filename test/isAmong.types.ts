import { isAmong } from "../src/isAmong";
import { Reflect } from "../src/Reflect";
import { assert, type Equals } from "../src/assert";

{
    const names = ["a", "b", "c"] as const;
    type Name = (typeof names)[number];

    const value = Reflect<unknown>();

    if (isAmong(value, names)) {
        assert<Equals<typeof value, Name>>();
    }
}

{
    const value = Reflect<unknown>();

    if (isAmong(value, ["a", "b"])) {
        assert<Equals<typeof value, "a" | "b">>();
    }
}

{
    const value = Reflect<unknown>();

    if (isAmong(value, ["a", 33, null, undefined])) {
        assert<Equals<typeof value, "a" | 33 | null | undefined>>();
    }
}
