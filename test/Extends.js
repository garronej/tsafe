"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
var emptyObj = {};
function fn() {
    return undefined;
}
var A = /** @class */ (function () {
    function A() {
        this.a = 1;
    }
    return A;
}());
{
    // identity
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
}
{
    // never extends everything
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    // nothing but itself extends never
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    // any extends nothing but itself and unknown
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    // unknown extends nothing but itself and any
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    // everything extends any
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    // everything extends unknown
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
}
{
    // numbers
    (0, assert_1.assert)();
    (0, assert_1.assert)();
}
{
    // functions
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
}
{
    // arrays
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
}
{
    // objects
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
}
//# sourceMappingURL=Extends.js.map