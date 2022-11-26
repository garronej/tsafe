import "../tools/Object.fromEntries";
/**
 * Like Function.prototype.bind() but for a function that
 * receives their parameters wrapped in an object.
 * See documentation for more details:
 * https://docs.tsafe.dev/withdefaults
 */
export declare function withDefaults<Params extends Record<string, unknown>, DefaultKey extends keyof Params, R>(f: (params: Params) => R, defaultParams: keyof Params extends never ? Record<string, never> : {
    [Key in DefaultKey]: Params[Key];
}): (params: {
    [Key in keyof Omit<Params, DefaultKey>]: Params[Key];
} & {
    defaultsOverwrite?: {
        [Key in DefaultKey]?: [Params[Key]];
    };
}) => R;
