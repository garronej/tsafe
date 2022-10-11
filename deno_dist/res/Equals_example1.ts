/* eslint-disable @typescript-eslint/ban-types */
import type { Equals } from "../index.ts";
import { assert } from "../assert.ts";

export function myFunction(params: { foo: string; bar: string; baz: string }) {
    const { foo, bar, baz, ...rest } = params;

    //We check that whe have deconstructed all the parameters.
    assert<Equals<typeof rest, {}>>();

    console.log(foo, bar, baz);
}
