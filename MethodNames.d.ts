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
export declare type MethodNames<Api> = NonNullable<{
    [Key in keyof Api]: Api[Key] extends ((...args: any[]) => unknown) | undefined ? Key : never;
}[keyof Api]>;
