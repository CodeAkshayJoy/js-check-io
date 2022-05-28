"use strict";
/**
Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - function should return True.

Input: A string.

Output: a boolean.

Example:

isAllUpper('ALL UPPER') == true
isAllUpper('all lower') == false
isAllUpper('mixed UPPER and lower') == false
isAllUpper('') == true
1
2
3
4
Precondition: a-z, A-Z, 1-9 and spaces
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function isAllUpper(text) {
    var result = true;
    text.split('').forEach((value, index) => {
        if (value !== value.toUpperCase() && result === true) {
            result = false;
        }
    });
    return result;
}
console.log('Example:');
console.log(isAllUpper('ALL UPPER'));
// These "asserts" are used for self-checking
assert_1.default.equal(isAllUpper('ALL UPPER'), true);
assert_1.default.equal(isAllUpper('all lower'), false);
assert_1.default.equal(isAllUpper('mixed UPPER and lower'), false);
assert_1.default.equal(isAllUpper(''), true);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
