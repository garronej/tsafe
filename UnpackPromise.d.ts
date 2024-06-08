/**
 * Use case:
 * declare const pr: Promise<string[]>;
 * const x: UnpackPromise<typeof pr>; <== x is string[]
 */
export type UnpackPromise<T extends PromiseLike<unknown> | undefined | null | false | ""> = T extends PromiseLike<infer U> ? U : never;
