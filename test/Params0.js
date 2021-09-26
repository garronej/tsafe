"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var doExtends_1 = require("../doExtends");
//@ts-ignore
function test() {
    var f = function (params) {
        return params;
    };
    (0, doExtends_1.doExtends)();
}
//@ts-ignore
function test() {
    var f = function (params, a, b) {
        return __assign(__assign({}, params), { a: a, b: b });
    };
    (0, doExtends_1.doExtends)();
}
{
}
{
    var A = /** @class */ (function () {
        function A(foo) {
            this.foo = foo;
        }
        return A;
    }());
}
{
    (0, doExtends_1.doExtends)();
}
{
    (0, doExtends_1.doExtends)();
}
{
    (0, doExtends_1.doExtends)();
}
//# sourceMappingURL=Params0.js.map