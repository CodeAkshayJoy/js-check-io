/**
You have a string that consist only of digits. You need to find how many zero digits ("0") are at the beginning of the given string.

Input: A string, that consist of digits.

Output: An Int.

Example:

beginningZeros('100') == 0
beginningZeros('001') == 2
beginningZeros('100100') == 0
beginningZeros('001001') == 2
beginningZeros('012345679') == 1
beginningZeros('0000') == 4
 */
import assert from "assert";

function beginningZeros(text: string): number {
    let zeroCount=0;
    for(let i =0; i<text.length; ++i){
        if(text[i]==='0'){
            zeroCount++;
        }else{
        break;
        }
    }
    return zeroCount;
}

console.log('Example:');
console.log(beginningZeros('000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000438576436743675807654674765765607560566546546095968029349083420869238083290894326893869043269038546058346983865489038385645646351001'));

// These "asserts" are used for self-checking
assert.equal(beginningZeros('100'), 0);
assert.equal(beginningZeros('001'), 2);
assert.equal(beginningZeros('100100'), 0);
assert.equal(beginningZeros('00438576436743675807654674765765607560566546546095968029349083420869238083290894326893869043269038546058346983865489038385645646351001'), 2);
assert.equal(beginningZeros('012345679'), 1);
assert.equal(beginningZeros('0000'), 4);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
