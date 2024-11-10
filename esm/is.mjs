import { assertIsRefWrapper } from './zz_internal/assertIsRefWrapper.mjs';

const errorMessage = [
    `Wrong usage of the ${is.name} function refer to`,
    `https://docs.tsafe.dev/${is.name.toLowerCase()}`,
].join(" ");
/** https://docs.tsafe.dev/is */
function is(value) {
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
