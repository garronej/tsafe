/* eslint-disable @typescript-eslint/no-explicit-any */

/** @see <https://docs.tsafe.dev/uniontointersection> **/
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I,
) => void
    ? I
    : never;
