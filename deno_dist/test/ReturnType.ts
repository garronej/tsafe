/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { ReturnType } from "../ReturnType.ts";
import { assert } from "../assert.ts";
import type { Equals } from "../Equals.ts";

{
    const getStringAsync: () => Promise<string> = null as any;

    type Got = ReturnType<typeof getStringAsync>;
    type Expected = string;

    assert<Equals<Got, Expected>>();
}

{
    const getString = (): string => {
        return null as any;
    };

    type Got = ReturnType<typeof getString>;
    type Expected = string;

    assert<Equals<Got, Expected>>();
}

{
    const getString: () => PromiseLike<string> = null as any;

    type Got = ReturnType<typeof getString>;
    type Expected = string;

    assert<Equals<Got, Expected>>();
}

{
    const getString: () => PromiseLike<string> | number = null as any;

    type Got = ReturnType<typeof getString>;
    type Expected = string | number;

    assert<Equals<Got, Expected>>();
}

{
    //@ts-expect-error
    type Got = ReturnType<number>;
}

{
    //@ts-expect-error
    type Got = ReturnType<Promise<void>>;
}

{
    const getString: (() => PromiseLike<string>) | undefined = null as any;

    type Got = ReturnType<typeof getString>;
    type Expected = string;

    assert<Equals<Got, Expected>>();
}

{
    const getString: (() => PromiseLike<string>) | null = null as any;

    type Got = ReturnType<typeof getString>;
    type Expected = string;

    assert<Equals<Got, Expected>>();
}
