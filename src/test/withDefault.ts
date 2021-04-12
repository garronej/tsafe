import { withDefaults } from "../typeSafety/withDefaults";
import { same } from "evt/tools/inDepth/same";

{
    const f = (params: { foo: string; bar: number }): string => {
        const { foo, bar } = params;
        return `${foo} ${bar}`;
    };

    const got = withDefaults(f, { "foo": "xxx" })({ "bar": 44 });

    const expected = `xxx 44`;

    if (!(got === expected)) {
        throw new Error();
    }

    console.log("PASS TEST 1");
}

{
    const f = (params: { a: number; b: number }) => {
        return params;
    };

    const got = withDefaults(f, { "a": 44 })({ "a": 33, "b": 22 });

    const expected = {
        "a": 33,
        "b": 22,
    };

    if (!same(got, expected)) {
        throw new Error();
    }

    console.log("PASS TEST 2");
}

{
    const f = (params: { a?: number; b?: number }) => {
        return params;
    };

    const got = withDefaults(f, { "a": 44 })({});
    const expected = {
        "a": 44,
        "b": undefined,
    };

    if (!same(got, expected)) {
        throw new Error();
    }

    console.log("PASS TEST 3");
}

//node dist/test/withDefault.js
