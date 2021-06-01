"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symToStr = void 0;
/** symbolAsString({ foo }) === "foo" */
function symToStr(wrap) {
    return Object.keys(wrap)[0];
}
exports.symToStr = symToStr;
//# sourceMappingURL=symToStr.js.map