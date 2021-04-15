/* eslint-disable @typescript-eslint/no-explicit-any */

import "./tools/Object.fromEntries";

/*
export function withDefaults<
    T extends Record<string, unknown>,
    U extends keyof T,
    V,
    W extends { [Key in keyof Omit<T, U>]: T[Key] } & { [Key in U]?: T[Key] }
>(
    f: (params: T) => V,
    injectedParams: U extends T ? never : { [Key in U]: T[Key] },
): (params: { [Key in keyof W]: W[Key] }) => V {
    return params => {
        Object.keys(params).forEach(key => {
            const paramsKey = key as keyof W;
            const injectedParamsKey = key as keyof T;

            if (params[paramsKey] === undefined) {
                params[paramsKey] = injectedParams[injectedParamsKey] as any;
            }
        });

        return f({ ...injectedParams, ...params });
    };
}
*/

/*export function withDefaults<
    F extends (params: any) => unknown,
    InjectedParams extends (F extends (params: infer Params) => unknown ? Params : never)
>(
    f: F,
    injectedParams: InjectedParams,
): (params: any) => F extends (params: any) => infer R ? R : never {

    //return params => f({ ...injectedParams, ...params });

    return null as any;

}**/

/*type Helper<T> = {
    [Key in keyof T]?: T[Key] extends [infer U] ? U : never;
}*/

/*
export function withDefaults<
    T extends Record<string, unknown>,
    U extends keyof T,
    V,
    W extends { [Key in keyof Omit<T, U>]: T[Key] } & {
        defaultsOverwrite?: {
            [Key in U]?: [T[Key]]
        }
    }
>(
    f: (params: T) => V,
    injectedParams: U extends T ? never : {
        [Key in U]: T[Key]
    }
): (params: { [Key in keyof W]: W[Key] }) => V {


    return params => {

        if (params.defaultsOverwrite === undefined) {
            return f({ ...injectedParams, ...params });
        }

        type ExtractedDefaultsOverwrite<T> = {
            [Key in keyof T]?: T[Key] extends [infer U] ? U : never;
        }


        const defaultsOverwriteExtracted: ExtractedDefaultsOverwrite<
            W["defaultsOverwrite"]
        > = {}

        const defaultsOverwrite = params.defaultsOverwrite as W;



        Object.keys(defaultsOverwrite).forEach(key => {

            const defaultKey = key as keyof typeof defaultsOverwrite;
            const extractedKey = key as keyof typeof defaultsOverwriteExtracted;

            if (defaultsOverwrite[defaultKey] === undefined) {

                defaultsOverwrite[defaultKey] =
                    [injectedParams[key as keyof T]] as any;

                return;
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            defaultsOverwriteExtracted[extractedKey] = defaultsOverwrite[defaultKey][0];

        });


        return f({
            ...injectedParams,
            ...(() => {
                const out = {
                    ...defaultsOverwriteExtracted,
                    ...params
                }

                delete out.defaultsOverwrite

                return out;
            })()
        });
    };

}
*/

export function withDefaults<Params extends Record<string, unknown>, DefaultKey extends keyof Params, R>(
    f: (params: Params) => R,
    defaultParams: keyof Params extends never
        ? Record<string, never>
        : { [Key in DefaultKey]: Params[Key] },
    //defaultParams: { [Key in DefaultKey]: Params[Key] },
): (
    params: { [Key in keyof Omit<Params, DefaultKey>]: Params[Key] } & {
        defaultsOverwrite?: { [Key in DefaultKey]?: [Params[Key]] };
    },
) => R {
    return params => {
        const { defaultsOverwrite = {}, ...actualParams } = params;

        // { "foo": ["ok"], "bar": [44], "baz": undefined } =
        // Object.entries(x) =>                                 [ [ "foo", ["ok"] ], [ "bar", [44] ], [ "baz", undefined ] ];
        // .filter(([, value]) => value !== undefined) =>       [ [ "foo", ["ok"] ], [ "bar", [44] ] ];
        // .map(([key, value]) => [key, value[0]]) =>           [ [ "foo", "ok" ], [ "bar", 44 ] ];
        // Object.fromEntries() =>                              { "foo": "ok", "bar": 44 }

        return f({
            ...defaultParams,
            ...actualParams,
            ...Object.fromEntries(
                Object.entries(defaultsOverwrite)
                    .filter(([, value]) => value !== undefined)
                    .map(([key, value]) => [key, (value as any)[0]]),
            ),
        } as any);
    };
}
