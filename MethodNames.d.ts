/** https://docs.tsafe.dev/methodnames */
export type MethodNames<Api> = Exclude<{
    [Key in keyof Api]: Api[Key] extends ((...args: any[]) => unknown) | undefined ? Key : never;
}[keyof Api], null | undefined>;
