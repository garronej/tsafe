/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Assign a value to a property even if the object is freezed or if the property is not writable
 * Throw if the assignation fail ( for example if the property is non configurable write: false )
 * */
const overwriteReadonlyProp = (obj, propertyName, value) => {
    try {
        obj[propertyName] = value;
    }
    catch { }
    if (obj[propertyName] === value) {
        return value;
    }
    let errorDefineProperty = undefined;
    const propertyDescriptor = Object.getOwnPropertyDescriptor(obj, propertyName) || {
        "enumerable": true,
        "configurable": true,
    };
    if (!!propertyDescriptor.get) {
        throw new Error(`Probably a wrong ides to overwrite ${String(propertyName)} getter`);
    }
    try {
        Object.defineProperty(obj, propertyName, {
            ...propertyDescriptor,
            value,
        });
    }
    catch (error) {
        errorDefineProperty = error;
    }
    if (obj[propertyName] !== value) {
        throw errorDefineProperty || new Error("Can't assign");
    }
    return value;
};

export { overwriteReadonlyProp };
//# sourceMappingURL=overwriteReadonlyProp.mjs.map
