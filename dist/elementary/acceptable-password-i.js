"use strict";
/**
You are the beginning of a password series. Every mission will be based on the previous one. Going forward the missions will become slightly more complex.

In this mission you need to create a password verification function.

Those are the verification conditions:

the length should be bigger than 6.
Input: A string.

Output: A bool.

Example:

isAcceptablePassword('short') == false
isAcceptablePassword('muchlonger') == true
isAcceptablePassword('ashort') == false
1
2
3
How it’s used: For password verification form. Also it’s good to learn how the task can be evaluated.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
let isAcceptablePassword = (password) => password.length > 6 ? true : false;
console.log('Example:');
console.log(isAcceptablePassword('short11111111111111111111111111'));
// These "asserts" are used for self-checking
assert_1.default.equal(isAcceptablePassword('short11111111111111111111111111'), true);
assert_1.default.equal(isAcceptablePassword('muchlonger'), true);
assert_1.default.equal(isAcceptablePassword('ashort'), false);
assert_1.default.equal(isAcceptablePassword(''), false);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
