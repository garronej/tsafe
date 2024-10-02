/** https://docs.tsafe.dev/isamong */
function isAmong(names, value) {
    for (const name of names) {
        if (name === value) {
            return true;
        }
    }
    return false;
}

export { isAmong };
//# sourceMappingURL=isAmong.mjs.map
