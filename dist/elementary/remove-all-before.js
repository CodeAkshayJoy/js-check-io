"use strict";
/**
Not all of the elements are important. What you need to do here is to remove from the array all of the elements before the given one.

example

For the illustration we have a array [3, 4, 5] and we need to remove all elements that go before 3 - which is 1 and 2.

We have two edge cases here: (1) if a cutting element cannot be found, then the array shoudn't be changed. (2) if the array is empty, then it should remain empty.

Input: Array and the border element.

Output: Array.

Example:

removeAllBefore([1, 2, 3, 4, 5], 3) == [3, 4, 5]
removeAllBefore([1, 1, 2, 2, 3, 3], 2) == [2, 2, 3, 3]
removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2) == [2, 4, 2, 3, 4]
removeAllBefore([1, 1, 5, 6, 7], 2) == [1, 1, 5, 6, 7]
removeAllBefore([], 0) == []
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function removeAllBefore(values, b) {
    var foundIndex = -1;
    var found = false;
    values.forEach((value, index) => {
        if (value === b && found === false) {
            foundIndex = index;
            found = true;
        }
    });
    if (foundIndex === -1)
        return values;
    return values.splice(foundIndex);
}
console.log('Example:');
console.log(removeAllBefore([1, 2, 3, 4, 5], 3));
// These "asserts" are used for self-checking
assert_1.default.deepEqual(removeAllBefore([1, 2, 3, 4, 5], 3), [3, 4, 5]);
assert_1.default.deepEqual(removeAllBefore([1, 1, 2, 2, 3, 3], 2), [2, 2, 3, 3]);
assert_1.default.deepEqual(removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2), [2, 4, 2, 3, 4]);
assert_1.default.deepEqual(removeAllBefore([1, 1, 5, 6, 7], 2), [1, 1, 5, 6, 7]);
assert_1.default.deepEqual(removeAllBefore([], 0), []);
assert_1.default.deepEqual(removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7), [7, 7, 7, 7, 7, 7, 7, 7, 7]);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
