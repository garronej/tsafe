"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/ban-ts-comment */
var withDefaults_1 = require("../lab/withDefaults");
var same_1 = require("evt/tools/inDepth/same");
var assert_1 = require("../assert");
{
    var f = function (params) {
        var foo = params.foo, bar = params.bar;
        return foo + " " + bar;
    };
    var got = (0, withDefaults_1.withDefaults)(f, { "foo": "xxx" })({ "bar": 44 });
    var expected = "xxx 44";
    (0, assert_1.assert)(got === expected);
    console.log("PASS TEST 1");
}
{
    var f = function (params) {
        return params;
    };
    var got = (0, withDefaults_1.withDefaults)(f, { "a": 44 })({ "defaultsOverwrite": { "a": [33] }, "b": 22 });
    var expected = {
        "a": 33,
        "b": 22,
    };
    (0, assert_1.assert)((0, same_1.same)(got, expected));
    console.log("PASS TEST 2");
}
{
    var f = function (params) {
        return params;
    };
    var got = (0, withDefaults_1.withDefaults)(f, { "a": 44 })({});
    var expected = {
        "a": 44,
        "b": undefined,
    };
    (0, assert_1.assert)((0, same_1.same)(got, expected));
    console.log("PASS TEST 3");
}
{
    var f = function (params) {
        var a = params.a, b = params.b;
        return "" + a + b;
    };
    var fWd = (0, withDefaults_1.withDefaults)(f, { "a": 44 });
    var got = fWd({ "b": 33 }) + fWd({ "b": 12 });
    var expected = "44334412";
    (0, assert_1.assert)(got === expected);
    console.log("PASS TEST 4");
}
{
    var f = function (params) {
        var a = params.a, b = params.b;
        return "" + a + b;
    };
    var fWd = (0, withDefaults_1.withDefaults)(f, { "a": 44 });
    var got = fWd({ "defaultsOverwrite": { "a": undefined }, "b": 33 });
    var expected = "4433";
    (0, assert_1.assert)(got === expected);
    console.log("PASS TEST 5");
}
{
    var f = function (params) {
        return params;
    };
    var fWd = (0, withDefaults_1.withDefaults)(f, { "a": 33 });
    var got = fWd({ "b": 44, "defaultsOverwrite": { "a": [undefined] } });
    var expected = {
        "a": undefined,
        "b": 44,
    };
    (0, assert_1.assert)((0, same_1.same)(got, expected));
    console.log("PASS TEST 6");
}
{
    var f = function (params) {
        return params;
    };
    var fWd = (0, withDefaults_1.withDefaults)(f, { "a": 33 });
    var got = fWd({ "b": 44, "defaultsOverwrite": { "a": [undefined] } });
    var expected = {
        "a": undefined,
        "b": 44,
    };
    (0, assert_1.assert)((0, same_1.same)(got, expected));
    console.log("PASS TEST 7");
}
//# sourceMappingURL=withDefault.js.map