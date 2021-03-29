
/** 
 * Assign a value to a property even if the object is freezed or if the property is not writable 
 * Throw if the assignation fail ( for example if the property is non configurable write: false )
 * */
export const overwriteReadonlyProp = <T extends { [key: string]: any; }, K extends keyof T>(
    obj: T,
    propertyName: K,
    value: T[K]
): T[K] => {

    try {

        obj[propertyName] = value;

    } catch{
    }

    if (obj[propertyName] === value) {
        return value;
    }

    let errorDefineProperty: Error | undefined = undefined;

    const propertyDescriptor: PropertyDescriptor =
        Object.getOwnPropertyDescriptor(obj, propertyName) || {
            "enumerable": true,
            "configurable": true
        };

    if (!!propertyDescriptor.get) {
        throw new Error(`Probably a wrong ides to overwrite ${propertyName} getter`);
    }


    try {

        Object.defineProperty(
            obj,
            propertyName,
            {
                ...propertyDescriptor,
                value
            }
        );

    } catch (error) {

        errorDefineProperty = error;

    }

    if (obj[propertyName] !== value) {
        throw errorDefineProperty || new Error("Can't assign");
    }

    return value;

};
