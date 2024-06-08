"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.AssertionError = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
var overwriteReadonlyProp_1 = require("./lab/overwriteReadonlyProp");
var assertIsRefWrapper_1 = require("./zz_internal/assertIsRefWrapper");
/** @see <https://docs.tsafe.dev/assert#error-thrown> */
var AssertionError = /** @class */ (function (_super) {
    __extends(AssertionError, _super);
    function AssertionError(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, "Wrong assertion encountered" + (!msg ? "" : ": \"".concat(msg, "\""))) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        if (!_this.stack) {
            return _this;
        }
        try {
            (0, overwriteReadonlyProp_1.overwriteReadonlyProp)(_this, "stack", _this.stack
                .split("\n")
                .filter(function () {
                var _a = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _a[_i] = arguments[_i];
                }
                var _b = __read(_a, 2), i = _b[1];
                return i !== 1 && i !== 2;
            })
                .join("\n"));
            // eslint-disable-next-line no-empty
        }
        catch (_a) { }
        return _this;
    }
    return AssertionError;
}(Error));
exports.AssertionError = AssertionError;
/** https://docs.tsafe.dev/assert */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function assert(condition, msg) {
    if (arguments.length === 0) {
        condition = true;
    }
    if (assertIsRefWrapper_1.assertIsRefWrapper.ref !== undefined) {
        assertIsRefWrapper_1.assertIsRefWrapper.ref = undefined;
        return;
    }
    if (!condition) {
        throw new AssertionError(msg);
    }
}
exports.assert = assert;
//# sourceMappingURL=assert.js.map