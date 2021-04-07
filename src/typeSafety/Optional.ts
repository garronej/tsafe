
type OptionalPropertiesOf<T extends Record<string, unknown>> = import("./OptionalPropertiesOf").OptionalPropertiesOf<T>;

/** 
 * Like the 'Required' builtin type alias helper 
 * but it only keeps properties that are marked optional.
 * 
 * Example: 
 * 
 * Optional<{ p1: string; p2?: string; p3?: number; }> 
 * is the type
 * { p2: string; p3: number }
 */
//export type Optional<T extends object> = Required<Pick<T, OptionalPropertiesOf<T>>>;

/*export type Optional<T extends Record<string, unknown>> = {
    [Key in OptionalPropertiesOf<T>]: Exclude<T[Key], undefined>;
}*/

export type Optional<T extends Record<string, unknown>> = Required<Pick<T, OptionalPropertiesOf<T>>>;


export type DeepOptional<T extends Record<string, unknown>> = {
    
    [Key in OptionalPropertiesOf<T>]: T[Key] extends Record<string, unknown>

    ? DeepOptional<T[Key]>

    : Exclude<T[Key], undefined>;

}
