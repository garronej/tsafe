/**
 * 
 * OBSOLETE
 * 
 * Unlike undefined or null, testing o !== void
 * will not restrict the type.
 * 
 * Example:
 * 
 * declare const o: { p: string; } | void;
 * 
 * matchVoid(o)?null:o.p <== Type inference ok
 * 
 * Match void
 * @param o type of o should be a union of type containing void
 * @returns true if o is undefined
 */
export function matchVoid(o: unknown): o is void | undefined {
    return o === undefined;
}
