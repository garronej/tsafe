/**
 * Use cases: 
 * 
 * 1) When we know the subtype of a variable but the compiler is unaware.
 * 
 * declare const x: "FOO" | "BAR";
 * 
 * 1.1) If we want to tel the compile that we know x is of type "BAR"
 * 
 * assert(typeGuard<"BAR">(x));
 * x; <== x is of type "BAR"
 * 
 * 1.2) If we want to tell the compiler that x is NOT of type "BAR"
 * 
 * assert(!typeGuard<"BAR">(x,false));
 * x; <== x is of type "FOO"
 * 
 * 2) Tell the compiler what assertion can be made on a given variable
 * if a given test return true.
 * 
 * type Circle = { type: "CIRCLE"; radius: number; };
 * type Square = { type: "SQUARE"; sideLength: number; };
 * type Shape = Circle | Square;
 * 
 * declare const shape: Shape;
 * 
 * if( typeGuard<Circle>(shape, shape.type === "CIRCLE") ){
 *     [ shape is Circle ]
 * }else{
 *     [ shape is not Circle ]
 * }
 * 
 * 
 * export function matchVoid(o: any): o is void {
 *     return typeGuard<void>(o, o === undefined || o === null );
 * }
 * 
 * 3) Helper for safely build other type guards
 * 
 * export function match<T>(set: Object): set is SetLike<T> {
 *     return (
 *         typeGuard<SetLike<T>>(set) &&
 *         typeof set.values === "function" &&
 *         /Set/.test(Object.getPrototypeOf(set).constructor.name)
 *     );
 * }
 * 
 */
export function typeGuard<T>(o: any, isMatched: boolean = true): o is T {
    o; //NOTE: Just to avoid unused variable;
    return isMatched;
}




