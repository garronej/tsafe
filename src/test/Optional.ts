import type {Optional, DeepOptional} from "../typeSafety/Optional";
import {doExtends} from "evt/tools/typeSafety/doExtends";




{
    type A = {
        a: number;
        b?: number;
        method1(param: string): number;
        method2?(params: {a: string; b: number;}): typeof params;
    }


    type Expected = Required<Pick<A, "b" | "method2">>;
    type Got = Optional<A>;

    doExtends<Expected, Got>();
    doExtends<Got, Expected>();
    
}


{
    type A = {
        a: number | undefined;
        b?: string;
    }

    type Expected = Required<Pick<A, "b">>;
    type Got = Optional<A>;

    doExtends<Expected, Got>();
    doExtends<Got, Expected>();

}

{
    type A = {
        a?: {
            aa: string;
            ab?: number;
        }

        b: string;
        c?: number;
    }

    type X = DeepOptional<A>;
}



