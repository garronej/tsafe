"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symToStr = symToStr;
/** @see <https://docs.tsafe.dev/main/symtostr> */
function symToStr(wrap) {
    // @ts-expect-error: We know better
    return Object.keys(wrap)[0];
}
//# sourceMappingURL=symToStr.js.map