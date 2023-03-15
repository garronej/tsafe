/** https://docs.tsafe.dev/methodnames */
export type MethodNames<Api> = NonNullable<{
    [Key in keyof Api]: Api[Key] extends ((...args: any[]) => unknown) | undefined ? Key : never;
}[keyof Api]>;
