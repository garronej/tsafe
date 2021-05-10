"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doExtends = void 0;
/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * This is a noOp that enables to statically ensure that T (the first type argument )
 * extends U ( the second type arguments )
 *
 * In other words, if do extends<T,U>() doesn't give red squiggles the assertion:
 * "T extends U" is true.
 */
function doExtends() { }
exports.doExtends = doExtends;
//# sourceMappingURL=doExtends.js.map