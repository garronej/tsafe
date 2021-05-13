/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { assertIsRefWrapper } from "./zz_internal/assertIsRefWrapper";

const errorMessage = [
    `Wrong usage of the ${is.name} function refer to`,
    `https://docs.tsafe.dev/${is.name.toLowerCase()}`,
].join(" ");

export function is<T>(_value: any): _value is T {
    const ref = {};

    if (assertIsRefWrapper.ref !== undefined) {
        assertIsRefWrapper.ref = undefined;
        throw new Error(errorMessage);
    }

    assertIsRefWrapper.ref = ref;

    Promise.resolve().then(() => {
        if (assertIsRefWrapper.ref === ref) {
            throw new Error(errorMessage);
        }
    });

    return null as any;
}
