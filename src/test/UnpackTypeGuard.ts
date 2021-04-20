/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { UnpackTypeGuard } from "../UnpackTypeGuard";
import { doExtends } from "../doExtends";
import type { Any } from "ts-toolbelt";

{
    //@ts-ignore
    type X = "foo" | "bar";

    const isFoo = (o: any): o is "foo" => {
        return true;
    };

    type Expected = "foo";
    type Got = UnpackTypeGuard<typeof isFoo>;

    doExtends<Any.Equals<Got, Expected>, 1>();
}

{
    //@ts-expect-error
    type Got = UnpackTypeGuard<string | number | boolean>;
}
