export type { Equals } from "./Equals";
export { is } from "./is";
/** @see <https://docs.tsafe.dev/assert#error-thrown> */
export declare class AssertionError extends Error {
    originalMessage?: string;
    constructor(msg: string | undefined);
}
/** https://docs.tsafe.dev/assert */
export declare function assert<_T extends true>(condition?: any, msg?: string | (() => string)): asserts condition;
