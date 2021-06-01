/** @see <https://docs.tsafe.dev/assert#error-thrown> */
export declare class AssertionError extends Error {
    constructor(msg: string | undefined);
}
/** https://docs.tsafe.dev/assert */
export declare function assert(condition: any, msg?: string): asserts condition;
