import type { Equals } from "../Equals.ts";
import { assert } from "../assert.ts";
import type { Unite } from "../tools/Unite.ts";
import type { StrictEquals } from "../tools/StrictEquals.ts";

type Shape = Circle | Square;

type Circle = {
    type: "circle";
    radius: number;
};

type Square = {
    type: "square";
    sideLength: number;
};

{
    type Got = Unite<Shape>;

    type Expected = Shape;

    assert<StrictEquals<Got, Expected>>();
}

{
    type A = {
        foo: string;
    } & {
        bar: number;
    };

    type B = {
        foo: string;
        bar: number;
    };

    //@ts-expect-error: Because of the &
    assert<StrictEquals<A, B>>();

    assert<Equals<A, B>>();
}
