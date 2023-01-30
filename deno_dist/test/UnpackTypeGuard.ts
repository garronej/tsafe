/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UnpackTypeGuard } from "../lab/UnpackTypeGuard.ts";
import { assert } from "../assert.ts";
import type { Equals } from "../Equals.ts";

{
    const isFoo = (_o: any): _o is "foo" => {
        return null as any;
    };

    type Expected = "foo";
    type Got = UnpackTypeGuard<typeof isFoo>;

    assert<Equals<Got, Expected>>();
}
