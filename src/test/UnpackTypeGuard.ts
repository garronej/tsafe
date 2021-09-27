/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UnpackTypeGuard } from "../lab/UnpackTypeGuard";
import { assert } from "../assert";
import type { Equals } from "../Equals";

{
    const isFoo = (_o: any): _o is "foo" => {
        return null as any;
    };

    type Expected = "foo";
    type Got = UnpackTypeGuard<typeof isFoo>;

    assert<Equals<Got, Expected>>();
}
