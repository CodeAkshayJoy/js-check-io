"use strict";
/**
In a given array the first element should become the last one. An empty array or array with only one element should stay the same.

example

Input: Array.

Output: Array.

Example:

replaceFirst([1, 2, 3, 4]) == [2, 3, 4, 1]
replaceFirst([1]) == [1]
replaceFirst([]) == []


 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function replaceFirst(values) {
    if (values.length === 0 || values.length === 1)
        return values;
    var splicedArray = values.splice(1);
    splicedArray.push(values[0]);
    return splicedArray;
}
console.log('Example:');
console.log(replaceFirst([1, 2, 3, 4]));
// These "asserts" are used for self-checking
assert_1.default.deepEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
assert_1.default.deepEqual(replaceFirst([1]), [1]);
assert_1.default.deepEqual(replaceFirst([]), []);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
