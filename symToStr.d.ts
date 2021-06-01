/** symbolAsString({ foo }) === "foo" */
export declare function symToStr<T extends Record<string, unknown>>(wrap: T): keyof T;
