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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
exports.withDefaults = void 0;
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
require("../tools/Object.fromEntries");
/**
 * Like Function.prototype.bind() but for a function that
 * receives their parameters wrapped in an object.
 * See documentation for more details:
 * https://docs.tsafe.dev/withdefaults
 */
function withDefaults(f, defaultParams) {
    return function (params) {
        var _a = params.defaultsOverwrite, defaultsOverwrite = _a === void 0 ? {} : _a, actualParams = __rest(params, ["defaultsOverwrite"]);
        return f(__assign(__assign(__assign({}, defaultParams), actualParams), Object.fromEntries(Object.entries(defaultsOverwrite)
            .filter(function (_a) {
            var _b = __read(_a, 2), value = _b[1];
            return value !== undefined;
        })
            .map(function (_a) {
            var _b = __read(_a, 2), key = _b[0], value = _b[1];
            return [key, value[0]];
        }))));
    };
}
exports.withDefaults = withDefaults;
//# sourceMappingURL=withDefaults.js.map