/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */


import { Reflect } from "tsafe/Reflect";
import { assert } from "tsafe/assert";
import type { Equals } from "tsafe";
import { exclude } from "../src/exclude";

// GPT: Help me write type definition for theses two functions so that...
type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];

declare function objectEntries<T extends object>(object: T): Entries<T>;

declare function objectFromEntries<K extends string | number | symbol, V>(
    entries: ReadonlyArray<readonly [K, V]>
): { [P in K]: V };
// ...This test compiles successfully
{

    const originalObject = Reflect<{
        a: string;
        b: string;
    }>();

    const modifiedObject = objectFromEntries(
        objectEntries(originalObject)
            .map(([key, value]) => [`${key}Foo`, value.length])
    );

    type ExpectedTypeOfModifiedObject = {
        aFoo: number;
        bFoo: number;
    };

    assert<Equals<typeof modifiedObject, ExpectedTypeOfModifiedObject>>();

}

{

    const s = {
        a: 1, 
        b: 2,
        c: "wesh"
    };

    const out = objectFromEntries(
        objectEntries(s)
            .map(([key, value]) => key === "b" ? undefined : [key, value] as const)
            .filter(exclude(undefined))
            .map(([key, value]) => [`${key}Foo`, value] as const)
    );

}

/*
import { objectKeys } from "../src/objectKeys";

const src = {
    "foo": "",
    "bar": 33,
    "baz": true
};

const obj: {
    foo: string;
    bar: number;
} = src;

const keys1 = Object.keys(obj);
const keys2 = objectKeys(obj);


function transformObject<T>(
    params: {
        object: T;
        transformEntry: <K extends keyof typeof params.object>(
            params: {
                key: keyof T;
                value: typeof params.object[K];
            }
        ) => [string, unknown];
    }
);
*/
