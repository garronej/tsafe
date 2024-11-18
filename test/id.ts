import { id } from "../src/id";

{
    type Square = {
        type: "SQUARE";
        side: number;
    };

    type Circle = {
        type: "CIRCLE";
        radius: number;
    };

    id<Square>({ "type": "SQUARE", "side": 12 });

    //@ts-expect-error
    id<Circle>({ "type": "SQUARE", "side": 12 });
}
