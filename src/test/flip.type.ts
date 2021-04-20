/* eslint-disable @typescript-eslint/ban-ts-comment */
import { flip } from "../flip";

{
    const obj = {
        "is_": true,
        "a": 1,
    };

    //@ts-expect-error
    flip(obj, "a");
}

{
    type A = {
        "is_": boolean;
        "a"?: number;
    };

    const obj: A = {
        "is_": true,
    };

    //@ts-expect-error
    flip(obj, "a");
}
