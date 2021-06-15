"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
var exclude_1 = require("../exclude");
var doExtends_1 = require("../doExtends");
{
    var x = ["a", "b", "c"].filter(exclude_1.exclude(["a"]));
    doExtends_1.doExtends();
}
{
    var x = ["a", "b", "c", "d"].filter(exclude_1.exclude(["a", "b"]));
    doExtends_1.doExtends();
}
{
    var x = [3, "a", false].filter(exclude_1.exclude([3]));
    doExtends_1.doExtends();
}
{
    //@ts-expect-error
    var x = ["a", "b", "c", "d"].filter(exclude_1.exclude("a", "b"));
}
//# sourceMappingURL=exclude.types.js.map