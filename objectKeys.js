"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectKeys = void 0;
/** Object.keys() with types */
function objectKeys(o) {
    return Object.keys(o);
}
exports.objectKeys = objectKeys;
/*
WARNING

const o = { "p": 33, "k": "ok", "r": null }

const x= objectKeys<{ p: number; k: string; }>(o);

x is of type ("p" | "k")[] wear as its value is ["p", "k", "r"];

only to use with the upmost circumspection.


*/
//# sourceMappingURL=objectKeys.js.map