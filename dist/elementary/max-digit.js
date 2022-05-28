"use strict";
/**
You have a number and you need to determine which digit in this number is the biggest.

Input: A positive int.

Output: An Int (0-9).

Example:

maxDigit(0) == 0
maxDigit(52) == 5
maxDigit(634) == 6
maxDigit(1) == 1
maxDigit(10000) == 1
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function maxDigit(value) {
    return Math.max(...(value.toString().split('').map(x => +x)));
}
console.log('Example:');
console.log(maxDigit(0));
// These "asserts" are used for self-checking
assert_1.default.equal(maxDigit(0), 0);
assert_1.default.equal(maxDigit(52), 5);
assert_1.default.equal(maxDigit(634), 6);
assert_1.default.equal(maxDigit(1), 1);
assert_1.default.equal(maxDigit(10000), 1);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
