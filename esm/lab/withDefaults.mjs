import '../tools/Object.fromEntries.mjs';

/**
 * Like Function.prototype.bind() but for a function that
 * receives their parameters wrapped in an object.
 * See documentation for more details:
 * https://docs.tsafe.dev/withdefaults
 */
function withDefaults(f, defaultParams) {
    return params => {
        const { defaultsOverwrite = {}, ...actualParams } = params;
        return f({
            ...defaultParams,
            ...actualParams,
            ...Object.fromEntries(Object.entries(defaultsOverwrite)
                .filter(([, value]) => value !== undefined)
                .map(([key, value]) => [key, value[0]])),
        });
    };
}

export { withDefaults };
//# sourceMappingURL=withDefaults.mjs.map
