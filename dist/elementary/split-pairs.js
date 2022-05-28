"use strict";
/**
Split the string into pairs of two characters. If the string contains an odd number of characters, then the missing second character of the final pair should be replaced with an underscore ('_').

Input: A string.

Output: An array of strings.

Example:

splitPairs('abcd') == ['ab', 'cd']
splitPairs('abc') == ['ab', 'c_']
splitPairs('abcdf') == ['ab', 'cd', 'f_']
splitPairs('a') == ['a_']
splitPairs('') == []
1
2
3
4
5
Precondition: 0<=len(str)<=100

var textArray = text.split('');
    var result:string[] = []
    let pair1 = textArray.slice(0, Math.ceil(text.length/2)).join('');
    console.log(pair1);
    let pair2 = textArray.slice(Math.ceil(text.length/2), text.length).join('');
    result.push(pair1);

    if(text.length%2===1)
        pair2 = pair2+'_';

    result.push(pair2);

    return result;

 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function splitPairs(text) {
    var result = [];
    for (let i = 0; i < text.length; i += 2) {
        var elem = text.split('').slice(i, i + 2).join('');
        result.push(elem);
    }
    if (text.length % 2 === 1) {
        result[result.length - 1] = result[result.length - 1] + "_";
    }
    return result;
}
console.log('Example:');
console.log(splitPairs('abc'));
// These "asserts" are used for self-checking
assert_1.default.deepEqual(splitPairs('abcd'), ['ab', 'cd']);
assert_1.default.deepEqual(splitPairs('abc'), ['ab', 'c_']);
assert_1.default.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
assert_1.default.deepEqual(splitPairs('a'), ['a_']);
assert_1.default.deepEqual(splitPairs(''), []);
console.log("Coding complete? Click 'Check' to earn cool rewards!");
