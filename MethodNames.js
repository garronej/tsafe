"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/**
 * Takes as type argument an Api interface and return
 * an union type constituted of all the properties names
 * whose values are functions.
 *
 * Example:
 *
 * interface Api {
 *     getFoo(): number;
 *     getBar(): string;
 *     p: object;
 * }
 *
 * MethodNames<Api> is "getFoo" | "getBar"
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=MethodNames.js.map