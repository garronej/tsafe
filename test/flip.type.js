"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/ban-ts-comment */
var flip_1 = require("../flip");
{
    var obj = {
        "is_": true,
        "a": 1,
    };
    //@ts-expect-error
    (0, flip_1.flip)(obj, "a");
}
{
    var obj = {
        "is_": true,
    };
    //@ts-expect-error
    (0, flip_1.flip)(obj, "a");
}
//# sourceMappingURL=flip.type.js.map