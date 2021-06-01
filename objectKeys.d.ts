/** Object.keys() with types */
export declare function objectKeys<T extends Record<string, unknown>>(o: T): (keyof T)[];
