import type { UnionToIntersection } from "../UnionToIntersection";
import type { Equals } from "..";
import { assert } from "../assert";

{
    type A = { foo: string };
    type B = { bar: number };

    type Got = UnionToIntersection<A | B>;
    type Expected = A & B;

    assert<Equals<Got, Expected>>();
}

{
    const o1 = {
        "p1": { "a": "foo" },
        "p2": { "b": "foo", "c": "foo" },
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const o2: UnionToIntersection<typeof o1[keyof typeof o1]> = {} as any;

    type Expected = { a: string; b: string; c: string };

    assert<Equals<typeof o2, Expected>>();
}
