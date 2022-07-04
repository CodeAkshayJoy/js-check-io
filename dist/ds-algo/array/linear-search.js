"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
/*
search the target and return true or false
*/
function linearSearch(arr, target) {
    var found = false;
    arr.forEach(x => {
        if (x === target && found == false) {
            found = true;
        }
    });
    return found;
}
// search the target and return the element
function linearSearchNumber(arr, target) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === target)
            return arr[i];
    }
    return Number.MAX_SAFE_INTEGER;
}
// search in the array: return the index if item found
// otherwise if item not found return -1
function linearSearchByIndex(arr, target) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === target)
            return (i + 1);
    }
    return -1;
}
console.log("Linear Search ...");
assert_1.default.equal(linearSearch([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], 2), true);
assert_1.default.strictEqual(linearSearch([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], -11), true);
assert_1.default.strictEqual(linearSearch([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], -1111), false);
assert_1.default.equal(linearSearchNumber([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], 2), 2);
assert_1.default.strictEqual(linearSearchNumber([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], -11), -11);
assert_1.default.strictEqual(linearSearchNumber([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], -1111), Number.MAX_SAFE_INTEGER);
assert_1.default.strictEqual(linearSearchByIndex([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], 2), 4);
assert_1.default.strictEqual(linearSearchByIndex([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], -11), 9);
assert_1.default.strictEqual(linearSearchByIndex([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], -1111), -1);
