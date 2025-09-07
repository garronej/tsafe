export type StrictEquals<A1, A2> =
    (<A>() => A extends A2 ? true : false) extends <A>() => A extends A1 ? true : false ? true : false;
