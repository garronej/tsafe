/** @see <https://docs.tsafe.dev/main/symtostr> */
export function symToStr<T extends Record<string, unknown>>(wrap: T): Exclude<keyof T, symbol | number> {
    // @ts-expect-error: We know better
    return Object.keys(wrap)[0];
}
