/* eslint-disable @typescript-eslint/no-explicit-any */

import { assert } from "../assert";
import { is } from "../is";
import type { Equals } from "../Equals";

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
