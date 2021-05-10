/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */

/** https://docs.tsafe.dev/typeguard */
export function typeGuard<T>(value: any, isMatched = true): value is T {
    return isMatched;
}
