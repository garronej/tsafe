/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { doExtends } from "../typeSafety/doExtends";
import { withDefaults } from "../typeSafety/withDefaults";
import type { Any } from "ts-toolbelt";

const x: <T>() => T = null as any;

function test1<T, U, V>() {
    const f: (params: { foo: T | undefined; bar: U }) => V = x<any>();
    const got = withDefaults(f, { "foo": x<T>() });

    const expected: (params: {
        bar: U;
        defaultsOverwrite?: {
            foo?: [T | undefined];
        };
    }) => V = x<any>();

    /*
    expected({  
        "bar": x<U>(), 
        "defaultsOverwrite": {
            "foo": [undefined]
        } 
    });
    */

    doExtends<Any.Equals<typeof got, typeof expected>, 1>();
}

function test2<T, U, V>() {
    const f: (params: { foo: T; bar: U }) => V = x<any>();
    const got = withDefaults(f, { "foo": x<T>() });

    const expected: (params: {
        bar: U;
        defaultsOverwrite?: {
            foo?: [T];
        };
    }) => V = x<any>();

    /*
    expected({  
        "bar": x<U>(), 
        "defaultsOverwrite": {
            "foo": [x<T>()]
        } 
    });
    */

    doExtends<Any.Equals<typeof got, typeof expected>, 1>();
}

function test3<T, U, V>() {
    const f: (params: { foo?: T; bar: U }) => V = x<any>();
    const got = withDefaults(f, { "foo": x<T>() });

    const expected: (params: {
        bar: U;
        defaultsOverwrite?: {
            foo?: [T | undefined];
        };
    }) => V = x<any>();

    /*
    expected({  
        "bar": x<U>(), 
        "defaultsOverwrite": {
            "foo": [x<T>()]
        } 
    });
    */

    doExtends<Any.Equals<typeof got, typeof expected>, 1>();
}

/*
function test1<T, U, V>() {

    const f: (params: { foo: T; bar: U }) => V = null as any;

    const got = withDefaults(f, { "bar": (null as any) as U });

    const expected: (params: { foo: T; bar?: U }) => V = null as any;

    doExtends<Any.Equals<typeof got, typeof expected>, 1>();
}

function test2<T>() {
    // eslint-disable-next-line @typescript-eslint/ban-types
    const f: (params: {}) => T = null as any;

    //@ts-expect-error
    withDefaults(f, { "foo": null as any });
}

function test3<T, U, V>() {
    const f: (params: { foo?: T; bar: U }) => V = null as any;

    const got = withDefaults(f, { "bar": (null as any) as U });
    const expected: (params: { foo?: T; bar?: U }) => V = null as any;

    //@ts-expect-error
    notAny(got);

    doExtends<Any.Equals<typeof got, typeof expected>, 1>();
}
*/
