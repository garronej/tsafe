
type OptionalPropertiesOf<T extends object> = import("./OptionalPropertiesOf").OptionalPropertiesOf<T>;

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
export type Optional<T extends object> = Required<Pick<T, OptionalPropertiesOf<T>>>;