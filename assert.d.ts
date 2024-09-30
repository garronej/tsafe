export type { Equals } from "./Equals";
/** @see <https://docs.tsafe.dev/assert#error-thrown> */
export declare class AssertionError extends Error {
    constructor(msg: string | undefined);
}
/** https://docs.tsafe.dev/assert */
export declare function assert<_T extends true>(condition?: any, msg?: string): asserts condition;
