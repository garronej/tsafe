/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */

/** https://docs.tsafe.dev/typeguard */
export function typeGuard<T>(_value: any, isMatched = true): _value is T {
    return isMatched;
}
