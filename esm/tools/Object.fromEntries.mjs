/* eslint-disable @typescript-eslint/no-explicit-any */
if (!Object.fromEntries) {
    Object.defineProperty(Object, "fromEntries", {
        "value": function (entries) {
            if (!entries || !entries[Symbol.iterator]) {
                throw new Error("Object.fromEntries() requires a single iterable argument");
            }
            const o = {};
            Object.keys(entries).forEach(key => {
                const [k, v] = entries[key];
                o[k] = v;
            });
            return o;
        },
    });
}
//# sourceMappingURL=Object.fromEntries.mjs.map
