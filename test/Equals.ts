import type { Equals } from "../src/Equals";
import { assert } from "../src/assert";
import type { Unite } from "../src/tools/Unite";
import type { StrictEquals } from "../src/tools/StrictEquals";

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
