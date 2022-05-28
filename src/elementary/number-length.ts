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

import assert from "assert";

function numberLength(value: number): number {
    let count = 0;
    if(value===0) return 1;
    while(value > 0){
        value = Math.floor(value/10);
        count++;
    }
    return count;
}

console.log('Example:');
console.log(numberLength(10));

// These "asserts" are used for self-checking
assert.equal(numberLength(10), 2);
assert.equal(numberLength(0), 1);
assert.equal(numberLength(4), 1);
assert.equal(numberLength(44), 2);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
