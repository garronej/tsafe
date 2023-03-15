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
exports.overwriteReadonlyProp = void 0;
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-explicit-any */
var assert_1 = require("../assert");
var is_1 = require("../is");
/**
 * Assign a value to a property even if the object is freezed or if the property is not writable
 * Throw if the assignation fail ( for example if the property is non configurable write: false )
 * */
var overwriteReadonlyProp = function (obj, propertyName, value) {
    try {
        obj[propertyName] = value;
    }
    catch (_a) { }
    if (obj[propertyName] === value) {
        return value;
    }
    var errorDefineProperty = undefined;
    var propertyDescriptor = Object.getOwnPropertyDescriptor(obj, propertyName) || {
        "enumerable": true,
        "configurable": true,
    };
    if (!!propertyDescriptor.get) {
        throw new Error("Probably a wrong ides to overwrite ".concat(String(propertyName), " getter"));
    }
    try {
        Object.defineProperty(obj, propertyName, __assign(__assign({}, propertyDescriptor), { value: value }));
    }
    catch (error) {
        (0, assert_1.assert)((0, is_1.is)(error));
        errorDefineProperty = error;
    }
    if (obj[propertyName] !== value) {
        throw errorDefineProperty || new Error("Can't assign");
    }
    return value;
};
exports.overwriteReadonlyProp = overwriteReadonlyProp;
//# sourceMappingURL=overwriteReadonlyProp.js.map