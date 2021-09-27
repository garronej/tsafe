"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
var is_1 = require("../is");
{
    var x = null;
    (0, assert_1.assert)((0, is_1.is)(x));
    (0, assert_1.assert)();
    console.log("PASS");
}
{
    var x = null;
    (0, assert_1.assert)(!(0, is_1.is)(x));
    (0, assert_1.assert)();
    console.log("PASS");
}
{
    (0, is_1.is)(null);
    try {
        (0, is_1.is)(null);
        throw new Error("FAIL");
        // eslint-disable-next-line no-empty
    }
    catch (_a) { }
    console.log("PASS");
}
//# sourceMappingURL=assertIs.js.map