/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { id } from "../id.ts";

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
