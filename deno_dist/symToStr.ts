/** @see <https://docs.tsafe.dev/main/symtostr> */
export function symToStr<T extends Record<string, unknown>>(wrap: T): keyof T {
    return Object.keys(wrap)[0];
}
