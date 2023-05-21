/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UnpackTypeGuard } from "../src/lab/UnpackTypeGuard";
import { assert } from "../src/assert";
import type { Equals } from "../src/Equals";

{
    const isFoo = (_o: any): _o is "foo" => {
        return null as any;
    };

    type Expected = "foo";
    type Got = UnpackTypeGuard<typeof isFoo>;

    assert<Equals<Got, Expected>>();
}
