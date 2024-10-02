const defineAccessors = (obj, propertyName, propertyDescriptor) => {
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
                "set": function (value) {
                    set.call(this, value);
                },
            }
            : {}),
    });
};

export { defineAccessors };
//# sourceMappingURL=defineAccessors.mjs.map
