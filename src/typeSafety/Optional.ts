import type { OptionalKeyof } from "./OptionalKeyof";
import { doExtends } from "./doExtends";

/**
 * Like the 'Required' builtin type alias helper
 * but it only keeps properties that are marked optional.
 *
 * Example:
 *
 * Optional<{ p1: string; p2?: string; p3?: number; }>
 * is the type
 * { p2: string; p3: number }
 */
//export type Optional<T extends object> = Required<Pick<T, OptionalPropertiesOf<T>>>;

/*export type Optional<T extends Record<string, unknown>> = {
    [Key in OptionalPropertiesOf<T>]: Exclude<T[Key], undefined>;
}*/

export type PickOptionals<T extends Record<string, unknown>> = {
    [Key in OptionalPropertiesOf<T>]: T[Key];
};

{
    type Props = {
        className?: string;
        color: "red" | "blue";
    };

    const defaultProps: Optional<Props> = {
        "className": undefined,
    };

    type Got = Optional<Props>;
    type Expected = {
        className: string | undefined;
    };

    doExtends<Got, Expected>();
    doExtends<Expected, Got>();
}

/*
export type DeepOptional<T extends Record<string, unknown>> = {
    [Key in OptionalPropertiesOf<T>]: T extends unknown ? T[Key] extends Record<string, unknown> ?
    DeepOptional<T[Key]> :
    Exclude<T[Key], undefined>
    : never;
}
*/

type MyType<T> = T extends string[] ? T[0] : never;
type MyTypeNonDistrib<T> = [T] extends [string[]] ? T[0] : never;

type Got = MyType<["foo"]>;
type Got2 = MyType<["foo"] | ["bar", "baz"] | undefined>;

type Got3 = MyTypeNonDistrib<["foo"] | ["bar", "foo"] | undefined>;

doExtends<{ bar?: string; baz: number } | undefined, Record<string, unknown>>();
doExtends<{ bar?: string; baz: number }, Record<string, unknown>>();
doExtends<undefined, Record<string, unknown>>();

type Obj = {
    hello: number;
    foo?: {
        bar?: string;
        baz: number;
    };
};

type Got = DeepOptional<Obj>;

type Expected = {
    foo: {
        bar: string;
    };
};

doExtends<Got, Expected>();
