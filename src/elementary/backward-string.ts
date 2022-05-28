/**
You should return a given string in reverse order.

Input: A string.

Output: A string.

Example:

backwardString('val') == 'lav'
backwardString('') == ''
backwardString('ohho') == 'ohho'
backwardString('123456789') == '987654321'
 */

import assert from "assert";

function backwardString(value: string): string {
    return value.toString().split('').reverse().join('');
}

console.log('Example:');
console.log(backwardString('123456789'));

// These "asserts" are used for self-checking
assert.equal(backwardString('val'), 'lav');
assert.equal(backwardString(''), '');
assert.equal(backwardString('ohho'), 'ohho');
assert.equal(backwardString('123456789'), '987654321');

console.log("Coding complete? Click 'Check' to earn cool rewards!");
