"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uncapitalize = void 0;
/** @see <https://docs.tsafe.dev/capitalize#uncapitalize> */
function uncapitalize(str) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (str.charAt(0).toLowerCase() + str.slice(1));
}
exports.uncapitalize = uncapitalize;
//# sourceMappingURL=uncapitalize.js.map