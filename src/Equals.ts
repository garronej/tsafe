/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * https://docs.tsafe.dev/main/equals
 * 
 * Check whether `A1` is equal to `A2` or not.
 * @param A1
 * @param A2
 * @returns [[Boolean]]
 * @example

 *
 * To use like:
 *
 * import type { Equals } from "tsafe";
 * import { doExtends } from "tsafe/doExtends";
 *
 * doExtends<Equals<Got,Expected>, 1>();
 *
 */
export type Equals<A1 extends any, A2 extends any> = (<A>() => A extends A2 ? 1 : 0) extends <
    A,
>() => A extends A1 ? 1 : 0
    ? 1
    : 0;

// Credit https://stackoverflow.com/a/52473108/3570903
