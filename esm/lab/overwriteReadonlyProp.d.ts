/**
 * Assign a value to a property even if the object is freezed or if the property is not writable
 * Throw if the assignation fail ( for example if the property is non configurable write: false )
 * */
export declare const overwriteReadonlyProp: <T extends {
    [key: string]: any;
}, K extends keyof T>(obj: T, propertyName: K, value: T[K]) => T[K];
