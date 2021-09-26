/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { doExtends } from "../doExtends";
import { withDefaults } from "../withDefaults";
import type { Equals } from "../Equals";

const x: <T>() => T = null as any;

//@ts-ignore
function test<T, U, V>() {
    const f: (params: { foo: T | undefined; bar: U }) => V = x<any>();
    const got = withDefaults(f, { "foo": x<T>() });

    const expected: (
        params: {
            bar: U;
        } & {
            defaultsOverwrite?: {
                foo?: [T | undefined];
            };
        },
    ) => V = x<any>();

    doExtends<Equals<typeof got, typeof expected>, 1>();
}

//@ts-ignore
function test<T, U, V>() {
    const f: (params: { foo: T; bar: U }) => V = x<any>();
    const got = withDefaults(f, { "foo": x<T>() });

    const expected: (
        params: {
            bar: U;
        } & {
            defaultsOverwrite?: {
                foo?: [T];
            };
        },
    ) => V = x<any>();

    doExtends<Equals<typeof got, typeof expected>, 1>();
}

//@ts-ignore
function test<T, U, V>() {
    const f: (params: { foo?: T; bar: U }) => V = x<any>();
    const got = withDefaults(f, { "foo": x<T>() });

    const expected: (
        params: {
            bar: U;
        } & {
            defaultsOverwrite?: {
                foo?: [T | undefined];
            };
        },
    ) => V = x<any>();

    doExtends<Equals<typeof got, typeof expected>, 1>();
}

//@ts-ignore
function test<T>() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const f: (params: {}) => T = null as any;

    //@ts-expect-error
    withDefaults(f, { "foo": null as any });
}

//@ts-ignore
function test<T>() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const f: (params: { bar: number }) => T = null as any;

    //@ts-expect-error
    withDefaults(f, { "foo": null as any });
}

//@ts-ignore
function test<T>() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const f: (params: {}) => T = null as any;

    withDefaults(f, {});
}

//@ts-ignore
function test<T>() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const f: (params: { foo: number; bar: string }) => T = null as any;

    //@ts-expect-error
    withDefaults(f, { "foo": null as any, "baz": "" });
}

//@ts-ignore
function test<T, U, V>() {
    const f: (params: { a: U; b: T }) => V = x<any>();

    const fWd = withDefaults(f, { "a": x<any>() });

    //@ts-expect-error
    const got = fWd({ "b": x<any>(), "defaultsOverwrite": { "a": [undefined] } });
}
