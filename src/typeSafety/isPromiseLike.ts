
export function isPromiseLike<T = void>(o: any): o is PromiseLike<T> {
    return typeof o?.then === "function";
}


/*
function myFun(): number | Promise<number> {
    return null as any;

}

const x: unknown = null as any;

//import { assert } from "./assert";

(async () => {

    console.log("a");

    const nOrPrN = myFun();

    const n = isPromiseLike(nOrPrN) ? await nOrPrN : nOrPrN;

    console.log("c");

})();

console.log("b");
*/