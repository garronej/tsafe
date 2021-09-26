"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
var objectKeys_1 = require("../objectKeys");
var doExtends_1 = require("../doExtends");
{
    var obj = {
        "a": 1,
        "b": "ok",
        "c": null,
    };
    var x = (0, objectKeys_1.objectKeys)(obj);
    (0, doExtends_1.doExtends)();
}
{
    var obj = {
        "a": 1,
        "b": "ok",
        "c": null,
    };
    var x = (0, objectKeys_1.objectKeys)(obj);
    (0, doExtends_1.doExtends)();
}
{
    var obj = {
        "a": 1,
        "b": "ok",
        "c": null,
    };
    //@ts-expect-error
    var x = (0, objectKeys_1.objectKeys)(obj);
}
{
    var A = /** @class */ (function () {
        function A(a, b, c) {
            this.a = a;
            this.b = b;
            this.c = c;
        }
        return A;
    }());
    var obj = new A(1, "ok", null);
    //@ts-expect-error
    var x = (0, objectKeys_1.objectKeys)(obj);
}
{
    var obj = {};
    var x = (0, objectKeys_1.objectKeys)(obj);
    (0, doExtends_1.doExtends)();
}
{
    var x = "ok";
    //@ts-expect-error
    var got = (0, objectKeys_1.objectKeys)(x);
}
{
    var x = 1;
    //@ts-expect-error
    var got = (0, objectKeys_1.objectKeys)(x);
}
{
    var x = true;
    //@ts-expect-error
    var got = (0, objectKeys_1.objectKeys)(x);
}
//# sourceMappingURL=objectKeys.types.js.map