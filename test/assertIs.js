"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
var is_1 = require("../is");
var doExtends_1 = require("../doExtends");
{
    var x = null;
    assert_1.assert(is_1.is(x));
    doExtends_1.doExtends();
    console.log("PASS");
}
{
    var x = null;
    assert_1.assert(!is_1.is(x));
    doExtends_1.doExtends();
    console.log("PASS");
}
{
    is_1.is(null);
    try {
        is_1.is(null);
        throw new Error("FAIL");
        // eslint-disable-next-line no-empty
    }
    catch (_a) { }
    console.log("PASS");
}
//# sourceMappingURL=assertIs.js.map