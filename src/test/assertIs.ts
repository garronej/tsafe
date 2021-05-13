/* eslint-disable @typescript-eslint/no-explicit-any */

import { assert } from "../assert";
import { is } from "../is";
import { Any } from "ts-toolbelt";
import { doExtends } from "../doExtends";

{
    const x: string | number | boolean = null as any;

    assert(is<string>(x));

    doExtends<Any.Equals<typeof x, string>, 1>();

    console.log("PASS");
}

{
    const x: string | number | boolean = null as any;

    assert(!is<string>(x));

    doExtends<Any.Equals<typeof x, number | boolean>, 1>();

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
