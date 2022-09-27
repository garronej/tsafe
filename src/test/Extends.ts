/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Equals } from "../Equals";
import type { Extends } from "../Extends";
import type { Not } from "../Not";
import { assert } from "../assert";

const emptyObj = {};

type EmptyObj = typeof emptyObj;

type Fn<A extends any[] = any[], R = any> = (...args: A) => R;

type Obj = Record<string, unknown>;

function fn() {
    return undefined;
}

class A {
    a = 1;
}

{
    // identity
    assert<Extends<never, never>>();
    assert<Extends<undefined, undefined>>();
    assert<Extends<null, null>>();
    assert<Extends<boolean, boolean>>();
    assert<Extends<number, number>>();
    assert<Extends<string, string>>();
    assert<Extends<symbol, symbol>>();
    assert<Extends<any[], any[]>>();
    assert<Extends<Fn, Fn>>();
    assert<Extends<Obj, Obj>>();
    assert<Extends<A, A>>();
}

{
    // never
    assert<Equals<Extends<never, any>, false>>();
    assert<Equals<Extends<any, never>, false>>();
    assert<Equals<Extends<never, 1>, false>>();
    assert<Equals<Extends<1, never>, false>>();
    assert<Equals<Extends<never, never>, true>>();
}

{
    // numbers
    assert<Extends<1, number>>();
    assert<Not<Extends<number, 1>>>();
}

{
    // functions
    assert<Extends<() => any, Fn>>();
    assert<Extends<() => void, Fn>>();
    assert<Extends<(...args: any[]) => any, Fn>>();
    assert<Extends<typeof fn, Fn>>();

    assert<Not<Extends<undefined, Fn>>>();
    assert<Not<Extends<null, Fn>>>();
    assert<Not<Extends<boolean, Fn>>>();
    assert<Not<Extends<number, Fn>>>();
    assert<Not<Extends<string, Fn>>>();
    assert<Not<Extends<any[], Fn>>>();
    assert<Not<Extends<Record<string, unknown>, Fn>>>();
    assert<Not<Extends<A, Fn>>>();
}

{
    // objects
    assert<Extends<A, EmptyObj>>();
    assert<Not<Extends<EmptyObj, A>>>();

    assert<Extends<A, Record<string, any>>>();
    assert<Not<Extends<Record<string, any>, A>>>();

    assert<Extends<A, unknown>>();
    assert<Not<Extends<unknown, A>>>();
}
