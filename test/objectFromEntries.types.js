"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objectFromEntries_1 = require("../objectFromEntries");
var assert_1 = require("../assert");
var id_1 = require("../id");
{
    var entries = [
        ["a", "foo"],
        ["b", 33],
        ["c", true],
    ];
    var obj = (0, objectFromEntries_1.objectFromEntries)(entries);
    Object.entries;
    (0, assert_1.assert)();
}
{
    var entries = [
        ["a", (0, id_1.id)("foo")],
        ["b", (0, id_1.id)(33)],
        ["c", (0, id_1.id)(true)],
    ];
    var obj = (0, objectFromEntries_1.objectFromEntries)(entries);
    (0, assert_1.assert)();
}
{
    (0, assert_1.assert)();
}
//# sourceMappingURL=objectFromEntries.types.js.map