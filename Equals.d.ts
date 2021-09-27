/** https://docs.tsafe.dev/main/equals */
export declare type Equals<A1 extends any, A2 extends any> = (<A>() => A extends A2 ? true : false) extends <A>() => A extends A1 ? true : false ? true : false;
