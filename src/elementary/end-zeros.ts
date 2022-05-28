/**
Try to find out how many zeros a given number has at the end.

Input: A positive Int

Output: An Int.

Example:

endZeros(0) == 1
endZeros(1) == 0
endZeros(10) == 1
endZeros(101) == 0
 */

import assert from "assert";

function endZeros(value: number): number {
    let arrayString = value.toString().split('');
    let zeroCount=0;
    while(arrayString.length>0){
        var elem = arrayString.pop();
        if(elem==="0")
            zeroCount++;
        else 
            break;    
    }

    return zeroCount;
}

console.log('Example:');
console.log(endZeros(100000010));

// These "asserts" are used for self-checking
assert.equal(endZeros(0), 1);
assert.equal(endZeros(1), 0);
assert.equal(endZeros(10), 1);
assert.equal(endZeros(101), 0);
assert.equal(endZeros(245), 0);
assert.equal(endZeros(100100), 2);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
