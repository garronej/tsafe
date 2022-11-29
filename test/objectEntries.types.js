"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objectEntries_1 = require("../objectEntries");
var assert_1 = require("../assert");
var Reflect_1 = require("../Reflect");
{
    var input = (0, Reflect_1.Reflect)();
    var got = (0, objectEntries_1.objectEntries)(input);
    (0, assert_1.assert)();
}
{
    var input = (0, Reflect_1.Reflect)();
    var got = (0, objectEntries_1.objectEntries)(input);
    (0, assert_1.assert)();
}
{
    var input = {
        "a": "foo",
        "b": 33,
        "c": true,
    };
    (0, assert_1.assert)();
    var got = (0, objectEntries_1.objectEntries)(input);
    (0, assert_1.assert)();
}
{
    var input = {};
    var got = (0, objectEntries_1.objectEntries)(input);
    (0, assert_1.assert)();
}
{
    (0, assert_1.assert)();
}
{
    (0, assert_1.assert)();
}
//# sourceMappingURL=objectEntries.types.js.map