import { withDefaults } from "../typeSafety/withDefaults";
import { same } from "evt/tools/inDepth/same";
import { assert } from "../typeSafety/assert";

{
    const f = (params: { foo: string; bar: number }): string => {
        const { foo, bar } = params;
        return `${foo} ${bar}`;
    };

    const got = withDefaults(f, { "foo": "xxx" })({ "bar": 44 });

    const expected = `xxx 44`;

    assert(got === expected);

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

    assert(same(got, expected));

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

    assert(same(got, expected));

    console.log("PASS TEST 3");
}

{
    const f = (params: { a: number; b: number }) => {
        const { a, b } = params;
        return `${a}${b}`;
    };

    const fWd = withDefaults(f, { "a": 44 });

    const got = fWd({ "b": 33 }) + fWd({ "b": 12 });

    const expected = "44334412";

    assert(got === expected);

    console.log("PASS TEST 4");
}

{
    const f = (params: { readonly a: number; b: number }) => {
        const { a, b } = params;
        return `${a}${b}`;
    };

    const fWd = withDefaults(f, { "a": 44 });
    const got = fWd({ "a": undefined, "b": 33 });
    const expected = "4433";

    assert(got === expected);

    console.log("PASS TEST 5");
}

/*{
    const f = (params: {a: number; b: number}) => {
        return params;
    }

    const fWd = withDefaults(f, {"a": 44});
    const got = fWd({"a": undefined, "b": 33})
}*/

//node dist/test/withDefault.js
