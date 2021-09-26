"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
var exclude_1 = require("../exclude");
var doExtends_1 = require("../doExtends");
{
    var x = ["a", "b", "c"].filter((0, exclude_1.exclude)(["a"]));
    (0, doExtends_1.doExtends)();
}
{
    var x = ["a", "b", "c", "d"].filter((0, exclude_1.exclude)(["a", "b"]));
    (0, doExtends_1.doExtends)();
}
{
    var x = [3, "a", false].filter((0, exclude_1.exclude)([3]));
    (0, doExtends_1.doExtends)();
}
{
    //@ts-expect-error
    var x = ["a", "b", "c", "d"].filter((0, exclude_1.exclude)("a", "b"));
}
//# sourceMappingURL=exclude.types.js.map