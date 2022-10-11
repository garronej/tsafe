"use strict";
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("../assert");
var withDefaults_1 = require("../lab/withDefaults");
var x = null;
//@ts-ignore
function test() {
    var f = x();
    var got = (0, withDefaults_1.withDefaults)(f, { "foo": x() });
    var expected = x();
    (0, assert_1.assert)();
}
//@ts-ignore
function test() {
    var f = x();
    var got = (0, withDefaults_1.withDefaults)(f, { "foo": x() });
    var expected = x();
    (0, assert_1.assert)();
}
//@ts-ignore
function test() {
    var f = x();
    var got = (0, withDefaults_1.withDefaults)(f, { "foo": x() });
    var expected = x();
    (0, assert_1.assert)();
}
//@ts-ignore
function test() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    var f = null;
    //@ts-expect-error
    (0, withDefaults_1.withDefaults)(f, { "foo": null });
}
//@ts-ignore
function test() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    var f = null;
    //@ts-expect-error
    (0, withDefaults_1.withDefaults)(f, { "foo": null });
}
//@ts-ignore
function test() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    var f = null;
    (0, withDefaults_1.withDefaults)(f, {});
}
//@ts-ignore
function test() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    var f = null;
    //@ts-expect-error
    (0, withDefaults_1.withDefaults)(f, { "foo": null, "baz": "" });
}
//@ts-ignore
function test() {
    var f = x();
    var fWd = (0, withDefaults_1.withDefaults)(f, { "a": x() });
    //@ts-expect-error
    var got = fWd({ "b": x(), "defaultsOverwrite": { "a": [undefined] } });
}
//# sourceMappingURL=withDefaults.types.js.map