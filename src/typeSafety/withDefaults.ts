// const { getConstantWp } withDefaults({ getConstant });

export function withDefaults<T extends Record<string, unknown>, U extends keyof T, V>(
    f: (params: T) => V,
    injectedParams: { [Key in U]: T[Key] },
): (params: { [Key in Exclude<keyof T, U>]: T[Key] }) => V {
    return null as any;

    //return (args: { [Key in Exclude<keyof T, keyof U>]: T[Key] }) =>
    //    f({  ...injectedArgs ,...args })
}

/*
const f = (params: { a: number; b: number }) => {
    return params;
};

const { functionWp } = withDefaults(f, { "b": 4 });

const x = functionWp({ "a": 42, "b": 4 });

type A = {
    a: number;
    b: number;
    c: number;
};

type B = Pick<A, "a" | "b">;

type C = {
    [Key in Exclude<keyof A, keyof B>]: A[Key];
};

const c: C = {
    "c": 123,
};

const b: B = {
    "a": 234,
    "b": 444,
};

function f2(args: A) {
    return args;
}

const f1 = (props: C) => f2({ ...props, ...b });

const f4 = f1({ "c": 44 });
*/
