/**
 * The identity function.
 *
 * Help to build an object of type T.
 * Better than using 'as T' as there is no type safety loss.
 *
 * - Used as continence for enabling type inference.
 * Example:
 *
 * type Circle = {
 *     type: "CIRCLE";
 *     radius: number;
 * };
 *
 * type Square = {
 *     type: "SQUARE";
 *     side: number;
 * };
 * type Shape= Circle | Square;
 *
 * declare function f(shape: Shape): void;
 *
 * f(id<Circle>({ "type": "CIRCLE", "radius": 33 }); <== We have auto completion to instantiate circle.
 *
 * - Used to loosen the type restriction without saying "trust me" to the compiler.
 * declare const x: Set<readonly ["FOO"]>;
 * declare function f(s: Set<string[]>): void;
 * f(id<Set<any>>(x));
 *
 * Example:
 * declare const x: Set<readonly [ "FOO" ]>;
 * declare f(x: Set<string[]>): void;
 * id(x as Set<["FOO"]>); <== trust me it's readonly!
 * f(id<Set<any>>(x)); <== we acknowledge that we are out of the safe zone.
 */
export declare const id: <T>(x: T) => T;
/**
 * Ensure that a that a specific type that we are declaring extends a more generic type
 *
 * Use case example 1:
 *
 * type MyObject = {
 *     p1: string;
 *     p2: string;
 *     a: string;
 *     b: string;
 * };
 *
 * We want to define a type that consist in an union of
 * all the property name that are letters:
 *
 * type AlphabeticalKeys = Id<keyof MyObject, "a" | "b">;
 *
 * Here AlphabeticalKeys is "a" | "b" but it's better than
 * simply writing it explicitly as we get autocompletion
 * and we can't include a property name that does not exist on MyObject.
 *
 * Use case example 2:
 *
 * We want to declare object type that only take string or number
 * as key value:
 *
 * export type MyObject = Id<Record<string, string | number>, {
 *     p1: string;
 *     p2: number;
 * }>;
 *
 * If later on someone adds "p3": string[] he will get a type error.
 * */
export declare type Id<Generic, Specific extends Generic> = Specific;
