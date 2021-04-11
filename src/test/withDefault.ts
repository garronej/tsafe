import { withDefaults } from "../typeSafety/withDefaults";
import { assert } from "evt/tools/typeSafety/assert";

{
    const f = (params: { foo: string; bar: number }): string => {
        const { foo, bar } = params;
        return `${foo} ${bar}`;
    };

    const got = withDefaults(f, { "foo": "xxx" })({ "bar": 44 });

    const expected = `xxx 44`;

    assert(got === expected);

    console.log("PASS");
}

export {};
