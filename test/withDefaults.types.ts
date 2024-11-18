import { assert } from "../src/assert";
import { withDefaults } from "../src/lab/withDefaults";
import type { Equals } from "../src/Equals";

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

    assert<Equals<typeof got, typeof expected>>();
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

    assert<Equals<typeof got, typeof expected>>();
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

    assert<Equals<typeof got, typeof expected>>();
}

//@ts-ignore
function test<T>() {
    const f: (params: {}) => T = null as any;

    //@ts-expect-error
    withDefaults(f, { "foo": null as any });
}

//@ts-ignore
function test<T>() {
    const f: (params: { bar: number }) => T = null as any;

    //@ts-expect-error
    withDefaults(f, { "foo": null as any });
}

//@ts-ignore
function test<T>() {
    const f: (params: {}) => T = null as any;

    withDefaults(f, {});
}

//@ts-ignore
function test<T>() {
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
