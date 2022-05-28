"use strict";
/**
You have a positive integer. Try to find out how many digits it has?

Input: A positive Int

Output: An Int.

Example:

numberLength(10) == 2
numberLength(0) == 1
numberLength(4) == 1
numberLength(44) == 2
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function numberLength(value) {
    let count = 0;
    if (value === 0)
        return 1;
    while (value > 0) {
        value = Math.floor(value / 10);
        count++;
    }
    return count;
}
console.log('Example:');
console.log(numberLength(10));
// These "asserts" are used for self-checking
assert_1.default.equal(numberLength(10), 2);
assert_1.default.equal(numberLength(0), 1);
assert_1.default.equal(numberLength(4), 1);
assert_1.default.equal(numberLength(44), 2);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
