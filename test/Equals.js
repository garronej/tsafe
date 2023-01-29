"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
{
    (0, assert_1.assert)();
}
{
    //@ts-expect-error: Because of the &
    (0, assert_1.assert)();
    (0, assert_1.assert)();
}
//# sourceMappingURL=Equals.js.map