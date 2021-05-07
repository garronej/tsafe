/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { id } from "../id";

{
    type Square = {
        type: "SQUARE";
        side: number;
    };

    type Circle = {
        type: "CIRCLE";
        radius: number;
    };

    type Shape = Circle | Square;

    const f = (shape: Shape) => {
        return shape;
    };

    f(
        id<Square>({ "type": "SQUARE", "side": 12 }),
    );

    //@ts-expect-error
    f(
        id<Circle>({ "type": "SQUARE", "side": 12 }),
    );
}

{
    //@ts-expect-error
    id<{ foo: string; bar: string }>({ "bar": "ok", "foo": "ok", "baz": "ok" });
}
