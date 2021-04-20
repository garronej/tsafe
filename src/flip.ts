/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Flip the value of a boolean without having to reference it twice
 * after running flip(x.y, "z") x.y.z !== x.y.z
 */

type KeyOfType<T extends Record<string, unknown>, U> = NonNullable<
    {
        [Key in keyof T]: T[Key] extends U | undefined ? Key : never;
    }[keyof T]
>;

export function flip<T extends Record<string, any>>(object: T, prop: KeyOfType<T, boolean>) {
    if (object[prop] === undefined) {
        return;
    }

    return (object[prop] = !object[prop] as any);
}
