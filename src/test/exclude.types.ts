/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { exclude } from "../exclude";
import { doExtends } from "../doExtends";
import { Any } from "ts-toolbelt";

{
    const x = (["a", "b", "c"] as const).filter(exclude(["a"]));

    type Got = typeof x;
    type Expected = ("b" | "c")[];

    doExtends<Any.Equals<Got, Expected>, 1>();
}

{
    const x = (["a", "b", "c", "d"] as const).filter(exclude(["a", "b"]));

    type Got = typeof x;
    type Expected = ("c" | "d")[];

    doExtends<Any.Equals<Got, Expected>, 1>();
}

{
    const x = [3, "a", false].filter(exclude([3]));

    type Got = typeof x;

    type Expected = (number | string | boolean)[];

    doExtends<Any.Equals<Got, Expected>, 1>();
}

{
    //@ts-expect-error
    const x = (["a", "b", "c", "d"] as const).filter(exclude("a", "b"));
}
