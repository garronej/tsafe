import type {OptionalPropertiesOf} from "../typeSafety/OptionalPropertiesOf";
import {doExtends} from "evt/tools/typeSafety/doExtends";


{
    type A = {
        a: number;
        b: string;
        c?: boolean;
        method1?(...args: unknown[]): unknown;
    }

    type Expected = "c" | "method1";
    type Got = OptionalPropertiesOf<A>;

    doExtends<Expected, Got>();
    doExtends<Got, Expected>();

}






{
    type A = {
        a?: {aa: unknown, ab: unknown};
        b: string;
        c?: number;
        method?: (param: number)=> {a: boolean; b: string};
    }

    type Got = OptionalPropertiesOf<A>;
    type Expected = "a" | "c" | "method";

    doExtends<Expected, Got>();
    doExtends<Got, Expected>();

    
}


{
    type A = {
        a: string | undefined;
        b?: number;
    }

    type Expected = "b";
    type Got = OptionalPropertiesOf<A>;

    doExtends<Expected, Got>();
    doExtends<Got, Expected>();

}

