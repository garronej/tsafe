export declare const defineAccessors: <T extends Record<string, unknown>, K extends keyof T>(obj: T, propertyName: K, propertyDescriptor: {
    get?: (() => T[K]) | undefined;
    set?: ((value: T[K]) => void) | undefined;
}) => void;
