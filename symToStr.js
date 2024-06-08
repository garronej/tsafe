"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symToStr = void 0;
/** @see <https://docs.tsafe.dev/main/symtostr> */
function symToStr(wrap) {
    // @ts-expect-error: We know better
    return Object.keys(wrap)[0];
}
exports.symToStr = symToStr;
//# sourceMappingURL=symToStr.js.map