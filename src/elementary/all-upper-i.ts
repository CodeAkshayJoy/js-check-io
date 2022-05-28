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

import assert from "assert";

function isAllUpper(text: string): boolean {
    var result= true;
    text.split('').forEach((value, index) =>{
        if(value !== value.toUpperCase() && result=== true){
            result=false;
        }
    })
    return result;
}

console.log('Example:');
console.log(isAllUpper('ALL UPPER'));

// These "asserts" are used for self-checking
assert.equal(isAllUpper('ALL UPPER'), true);
assert.equal(isAllUpper('all lower'), false);
assert.equal(isAllUpper('mixed UPPER and lower'), false);
assert.equal(isAllUpper(''), true);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
