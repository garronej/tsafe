/** https://docs.tsafe.dev/typeguard */
export function typeGuard<T>(value: any, isMatched: boolean): value is T {
    return isMatched;
}
