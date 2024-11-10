export const defineAccessors = <T extends Record<string, unknown>, K extends keyof T>(
    obj: T,
    propertyName: K,
    propertyDescriptor: {
        get?: () => T[K];
        set?: (value: T[K]) => void;
    },
): void => {
    const { get, set } = propertyDescriptor;

    Object.defineProperty(obj, propertyName, {
        ...(Object.getOwnPropertyDescriptor(obj, propertyName) || {
            "enumerable": true,
            "configurable": true,
        }),
        ...(get !== undefined
            ? {
                  "get": function () {
                      return get.call(this);
                  },
              }
            : {}),
        ...(set !== undefined
            ? {
                  "set": function (value: T[K]) {
                      set.call(this, value);
                  },
              }
            : {}),
    });
};
