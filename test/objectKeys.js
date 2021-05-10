"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objectKeys_1 = require("../objectKeys");
var assert_1 = require("../assert");
var same_1 = require("evt/tools/inDepth/same");
{
    var obj = {
        "a": 1,
        "b": 2,
        "c": 3,
    };
    var got = objectKeys_1.objectKeys(obj);
    var expected = ["a", "b", "c"];
    assert_1.assert(same_1.same(got, expected));
    console.log("PASS TEST 1");
}
{
    var obj = {
        "a": 1,
        "b": 2,
        "c": 3,
    };
    var got = objectKeys_1.objectKeys(obj);
    var expected = ["a", "b", "c"];
    assert_1.assert(same_1.same(got, expected));
    console.log("PASS TEST 2");
}
//# sourceMappingURL=objectKeys.js.map