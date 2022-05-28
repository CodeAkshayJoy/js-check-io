/**
In a given array the first element should become the last one. An empty array or array with only one element should stay the same.

example

Input: Array.

Output: Array.

Example:

replaceFirst([1, 2, 3, 4]) == [2, 3, 4, 1]
replaceFirst([1]) == [1]
replaceFirst([]) == []


 */

import assert from "assert";

function replaceFirst(values: number[]): number[] {
    if(values.length===0 || values.length===1)
        return values;
    var splicedArray = values.splice(1);
    splicedArray.push(values[0]);
    return splicedArray;
}

console.log('Example:');
console.log(replaceFirst([1, 2, 3, 4]));

// These "asserts" are used for self-checking
assert.deepEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
assert.deepEqual(replaceFirst([1]), [1]);
assert.deepEqual(replaceFirst([]), []);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
