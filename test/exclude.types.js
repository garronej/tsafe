"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
var exclude_1 = require("../exclude");
var assert_1 = require("../assert");
{
    var x = ["a", "b", "c"].filter((0, exclude_1.exclude)(["a"]));
    (0, assert_1.assert)();
}
{
    var x = ["a", "b", "c", "d"].filter((0, exclude_1.exclude)(["a", "b"]));
    (0, assert_1.assert)();
}
{
    var x = [3, "a", false].filter((0, exclude_1.exclude)([3]));
    (0, assert_1.assert)();
}
{
    //@ts-expect-error
    var x = ["a", "b", "c", "d"].filter((0, exclude_1.exclude)("a", "b"));
}
//# sourceMappingURL=exclude.types.js.map