"use strict";
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let utils = new ArrayUtils();
let nums = ArrayUtils.wrapInArray(2);
function wrapInArray(value) {
    return [value];
}
let arrNumbers = wrapInArray("2");
//# sourceMappingURL=generic-functions.js.map