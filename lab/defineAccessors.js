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
exports.defineAccessors = void 0;
var defineAccessors = function (obj, propertyName, propertyDescriptor) {
    var get = propertyDescriptor.get, set = propertyDescriptor.set;
    Object.defineProperty(obj, propertyName, __assign(__assign(__assign({}, (Object.getOwnPropertyDescriptor(obj, propertyName) || {
        "enumerable": true,
        "configurable": true,
    })), (get !== undefined
        ? {
            "get": function () {
                return get.call(this);
            },
        }
        : {})), (set !== undefined
        ? {
            "set": function (value) {
                set.call(this, value);
            },
        }
        : {})));
};
exports.defineAccessors = defineAccessors;
//# sourceMappingURL=defineAccessors.js.map