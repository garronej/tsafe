/** @see <https://docs.tsafe.dev/main/symtostr> */
function symToStr(wrap) {
    // @ts-expect-error: We know better
    return Object.keys(wrap)[0];
}

export { symToStr };
//# sourceMappingURL=symToStr.mjs.map
