import * as fs from "fs";
import * as path from "path";
function getProjectRootRec(dirPath) {
    if (fs.existsSync(path.join(dirPath, "package.json"))) {
        return dirPath;
    }
    return getProjectRootRec(path.join(dirPath, ".."));
}
var result = undefined;
export function getProjectRoot() {
    if (result !== undefined) {
        return result;
    }
    return (result = getProjectRootRec(__dirname));
}
//# sourceMappingURL=getProjectRoot.js.map