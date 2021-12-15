"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var flip_1 = require("../flip");
var assert_1 = require("../assert");
{
    var obj = {
        "is_": true,
        "a": 1,
    };
    var expected = false;
    (0, flip_1.flip)(obj, "is_");
    var got = obj.is_;
    (0, assert_1.assert)(got === expected);
    console.log("PASS TEST 1");
}
{
    var obj = {
        "is_": true,
    };
    var expected = false;
    var got = (0, flip_1.flip)(obj, "is_");
    (0, assert_1.assert)(got === expected);
    console.log("PASS TEST 2");
}
{
    var obj = {
        "a": {
            "is_": true,
            "aa": 1,
        },
    };
    var expected = false;
    (0, flip_1.flip)(obj.a, "is_");
    var got = obj.a.is_;
    (0, assert_1.assert)(got === expected);
    console.log("PASS TEST 3");
}
{
    var obj = {
        "a": 1,
        "is_": true,
    };
    var expected = false;
    (0, flip_1.flip)(obj, "is_");
    var got = obj.is_;
    (0, assert_1.assert)(got === expected);
    console.log("PASS TEST 4");
}
{
    var A = /** @class */ (function () {
        function A(is_, a) {
            this.is_ = is_;
            this.a = a;
        }
        return A;
    }());
    var obj = new A(true, 1);
    var expected = false;
    (0, flip_1.flip)(obj, "is_");
    var got = obj.is_;
    (0, assert_1.assert)(got === expected);
    console.log("PASS TEST 5");
}
{
    var obj = {
        "a": 1,
        "is_": true,
    };
    var expected = false;
    (0, flip_1.flip)(obj, "is_");
    var got = obj.is_;
    (0, assert_1.assert)(got === expected);
    console.log("PASS TEST 6");
}
{
    var obj = {
        "a": 1,
    };
    var expected = undefined;
    (0, flip_1.flip)(obj, "is_");
    var got = obj.is_;
    (0, assert_1.assert)(got === expected);
    console.log("PASS TEST 7");
}
//# sourceMappingURL=flip.js.map