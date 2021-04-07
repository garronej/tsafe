import type { AsyncReturnType } from "../typeSafety/AsyncReturnType";
import { doExtends } from "evt/tools/typeSafety/doExtends";

{
    const getStringAsync = async (arg: number) => {
        return `${arg}`;
    };

    type Got = AsyncReturnType<typeof getStringAsync>;
    type Expected = string;

    doExtends<Got, Expected>();
    doExtends<Expected, Got>();
}

{
    const getObjectAsync = async (params: { a: number; b: string }) => {
        return params;
    };

    type Got = AsyncReturnType<typeof getObjectAsync>;
    type Expected = {
        a: number;
        b: string;
    };

    doExtends<Got, Expected>();
    doExtends<Expected, Got>();
}

{
    const getNumberAsync = async (params: { a: number; b: string }) => {
        return params.a * params.b.length;
    };

    type Got = AsyncReturnType<typeof getNumberAsync>;
    type Expected = number;

    doExtends<Got, Expected>();
    doExtends<Expected, Got>();
}

{
    const getBooleanAsync = async (params: { a: number; b: string }) => {
        return params.a * params.b.length === 42;
    };

    type Got = AsyncReturnType<typeof getBooleanAsync>;
    type Expected = boolean;

    doExtends<Got, Expected>();
    doExtends<Expected, Got>();
}

async function getterAsync(param: "a" | "b" | "c" | "d") {
    if (param === "a") {
        return;
    }

    return `returned ${param}`;
}

{
    type Got = AsyncReturnType<typeof getterAsync>;
    type Expected = string | undefined;

    doExtends<Got, Expected>();
    doExtends<Expected, Got>();
}
