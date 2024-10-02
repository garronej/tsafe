import { assertIsRefWrapper } from './zz_internal/assertIsRefWrapper.mjs';

/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */
const errorMessage = [
    `Wrong usage of the ${is.name} function refer to`,
    `https://docs.tsafe.dev/${is.name.toLowerCase()}`,
].join(" ");
function is(_value) {
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
    return null;
}

export { is };
//# sourceMappingURL=is.mjs.map
