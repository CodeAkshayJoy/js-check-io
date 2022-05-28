/**
Your mission here is to create a function that gets an array and returns a tuple with 3 elements - the first, third and second element from the last for the given array.

Input: A tuple, at least 3 elements long.

Output: A tuple.

Example:

easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]) == [1, 3, 7]
easyUnpack([1, 1, 1, 1]) == [1, 1, 1]
easyUnpack([6, 3, 7]) == [6, 7, 3]
 */

import assert from "assert";

function easyUnpack(values: any[]): any[] {
    return [values[0], values[2], values[values.length-2]]
}

console.log('Example:');
console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]));

// These "asserts" are used for self-checking
assert.deepStrictEqual(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]), [1, 3, 7]);
assert.deepStrictEqual(easyUnpack([1, 1, 1, 1]), [1, 1, 1]);
assert.deepStrictEqual(easyUnpack([6, 3, 7]), [6, 7, 3]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
