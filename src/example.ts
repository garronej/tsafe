/* eslint-disable @typescript-eslint/no-explicit-any */

/*interface Api {
    getFoo: (()=> void) | undefined;
}


type Intermediary<T> ={
    [Key in keyof T]: T[Key] extends Function ? "ok" : never;
}


type XX = Intermediary<Api>;




type Tx<T> = T extends Function ? "ok" : never;

type XXXXX1 = Tx<undefined>
type XXXXX2 = Tx<() => void>
type XXXXX3 = Tx<(() => void) | undefined>




/*

export function doExtends<T extends U, U>(): T | void { }


type In = "foo" | "bar" | undefined;

type Expected = "foo" | "bar";

type Got = ExcludeUndefined<In>;


doExtends<Expected,Got>();
doExtends<Got,Expected>();


{

    const input = { "p": false };

    const expected = { "p": true };

    flip(input, "p");

    assert(same(input, expected), "The value should have been flipped");

    console.log("PASS");

}

{

    type MyType = { foo: boolean; baz: string; readonly xyz: boolean; };

    const myObject: MyType = null as any;

    flip(myObject, "foo");

    //@ts-expect-error
    flip(myObject, "bar");

    //@ts-expect-error
    flip(myObject, "baz");

    //@ts-expect-error
    flip(myObject, "xyz");

}
*/

export type DeepMethodNames<Api> = NonNullable<
    {
        [Key in keyof Api]: Api[Key] extends ((...args: any[]) => unknown) | undefined
            ? Key
            : Api[Key] extends Record<string, unknown> | undefined
            ? DeepMethodNames<Api[Key]>
            : never;
    }[keyof Api]
>;
