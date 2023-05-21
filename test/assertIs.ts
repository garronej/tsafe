/* eslint-disable @typescript-eslint/no-explicit-any */

import { assert } from "../src/assert";
import { is } from "../src/is";
import type { Equals } from "../src/Equals";

{
    const x: string | number | boolean = null as any;

    assert(is<string>(x));

    assert<Equals<typeof x, string>>();

    console.log("PASS");
}

{
    const x: string | number | boolean = null as any;

    assert(!is<string>(x));

    assert<Equals<typeof x, number | boolean>>();

    console.log("PASS");
}

{
    is<unknown>(null);

    try {
        is<unknown>(null);
        throw new Error("FAIL");
        // eslint-disable-next-line no-empty
    } catch {}

    console.log("PASS");
}

scope: {
    try {
        assert(undefined);
    } catch {
        console.log("PASS");

        break scope;
    }

    throw new Error("Fail");
}
