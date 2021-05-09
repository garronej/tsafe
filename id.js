"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.id = void 0;
/**
 * The identity function.
 *
 * Help to build an object of type T.
 * Better than using 'as T' as there is no type safety loss.
 *
 * - Used as continence for enabling type inference.
 * Example:
 *
 * type Circle = {
 *     type: "CIRCLE";
 *     radius: number;
 * };
 *
 * type Square = {
 *     type: "SQUARE";
 *     side: number;
 * };
 * type Shape= Circle | Square;
 *
 * declare function f(shape: Shape): void;
 *
 * f(id<Circle>({ "type": "CIRCLE", "radius": 33 }); <== We have auto completion to instantiate circle.
 *
 * - Used to loosen the type restriction without saying "trust me" to the compiler.
 * declare const x: Set<readonly ["FOO"]>;
 * declare function f(s: Set<string[]>): void;
 * f(id<Set<any>>(x));
 *
 * Example:
 * declare const x: Set<readonly [ "FOO" ]>;
 * declare f(x: Set<string[]>): void;
 * id(x as Set<["FOO"]>); <== trust me it's readonly!
 * f(id<Set<any>>(x)); <== we acknowledge that we are out of the safe zone.
 */
var id = function (x) { return x; };
exports.id = id;
//# sourceMappingURL=id.js.map