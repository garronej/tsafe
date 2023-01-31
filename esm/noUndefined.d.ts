/**
 * Removes the enumerable properties whose values are
 * undefined.
 *
 * Example:
 * noUndefined({ "foo": undefined, "bar": 3 }) returns
 * a new object { "bar": 3 }
 */
export declare function noUndefined<T extends object>(obj: T): T;
