

/** 
 * Flip the value of a boolean without having to reference it twice
 * after running flip(x.y, "z") x.y.z !== x.y.z
 */
export function flip<Key extends string>(obj: Record<Key, boolean>, propertyName: Key): boolean {
    return obj[propertyName] = !obj[propertyName];
}
