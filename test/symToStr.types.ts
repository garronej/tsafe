/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { symToStr } from "../src/symToStr";
import { Reflect } from "../src/Reflect";
import { assert } from "../src/assert";
import type { Equals } from "../src/Equals";

{
    const theName = null;

    const expected = "theName" as const;

    const got = symToStr({ theName });

    assert<Equals<typeof expected, typeof got>>();
}

{
    const expected = "theName" as const;

    const got = symToStr({ "theName": undefined });

    assert<Equals<typeof expected, typeof got>>();
}

{
    type Expected = string;

    const got = symToStr(Reflect<any>());

    assert<Equals<Expected, typeof got>>();
}
