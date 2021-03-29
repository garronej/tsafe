/* eslint-disable @typescript-eslint/no-explicit-any */

/** Object.keys() with types */
export function objectKeys<T extends Record<string, unknown>>(o: T): (keyof T)[] {
    return Object.keys(o) as any;
}

/*
WARNING

const o = { "p": 33, "k": "ok", "r": null }

const x= objectKeys<{ p: number; k: string; }>(o);
*/