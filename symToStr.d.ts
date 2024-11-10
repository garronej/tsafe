/** @see <https://docs.tsafe.dev/main/symtostr> */
export declare function symToStr<T extends Record<string, unknown>>(wrap: T): Exclude<keyof T, symbol | number>;
