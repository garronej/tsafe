"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exclude_1 = require("../exclude");
var assert_1 = require("../assert");
var same_1 = require("evt/tools/inDepth/same");
{
    var got = ["a", "b", "c"].filter(exclude_1.exclude("a"));
    var expected = ["b", "c"];
    assert_1.assert(same_1.same(got, expected));
    console.log("PASS TEST 1");
}
{
    var got = ["a", "b", "c"].filter(exclude_1.exclude(["a"]));
    var expected = ["b", "c"];
    assert_1.assert(same_1.same(got, expected));
    console.log("PASS TEST 2");
}
{
    var got = [1, 2, 3].filter(exclude_1.exclude("foo"));
    var expected = [1, 2, 3];
    assert_1.assert(same_1.same(got, expected));
    console.log("PASS TEST 3");
}
{
    var got = ["a", "b", "c", "d"].filter(exclude_1.exclude(["a", "b"]));
    var expected = ["c", "d"];
    assert_1.assert(same_1.same(got, expected));
    console.log("PASS TEST 4");
}
//# sourceMappingURL=exclude.js.map