/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { ReturnType } from "../ReturnType.ts";
import { doExtends } from "../doExtends.ts";
import { Any } from "ts-toolbelt DENOIFY: DEPENDENCY UNMET (DEV DEPENDENCY)";

{
    const getStringAsync: () => Promise<string> = null as any;

    type Got = ReturnType<typeof getStringAsync>;
    type Expected = string;

    doExtends<Any.Equals<Got, Expected>, 1>();
}

{
    const getString = (): string => {
        return null as any;
    };

    type Got = ReturnType<typeof getString>;
    type Expected = string;

    doExtends<Any.Equals<Got, Expected>, 1>();
}

{
    const getString: () => PromiseLike<string> = null as any;

    type Got = ReturnType<typeof getString>;
    type Expected = string;

    doExtends<Any.Equals<Got, Expected>, 1>();
}

{
    const getString: () => PromiseLike<string> | number = null as any;

    type Got = ReturnType<typeof getString>;
    type Expected = string | number;

    doExtends<Any.Equals<Got, Expected>, 1>();
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

    doExtends<Any.Equals<Got, Expected>, 1>();
}

{
    const getString: (() => PromiseLike<string>) | null = null as any;

    type Got = ReturnType<typeof getString>;
    type Expected = string;

    doExtends<Got, Expected>();
    doExtends<Expected, Got>();
}
