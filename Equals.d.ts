/** https://docs.tsafe.dev/main/equals */
export declare type Equals<A1 extends any, A2 extends any> = (<A>() => A extends A2 ? 1 : 0) extends <A>() => A extends A1 ? 1 : 0 ? 1 : 0;
