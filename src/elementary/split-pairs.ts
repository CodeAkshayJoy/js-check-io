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

import assert from "assert";

function splitPairs(text: string): string[] {
    var result:string[] =[]

    for(let i=0; i< text.length;i+=2){
        var elem = text.split('').slice(i,i+2).join('');
        result.push(elem);
        
    }
   if(text.length%2===1){
    result[result.length-1] = result[result.length-1]+"_"
   }
    return result;
}

console.log('Example:');
console.log(splitPairs('abc'));


// These "asserts" are used for self-checking
 assert.deepEqual(splitPairs('abcd'), ['ab', 'cd']);
 assert.deepEqual(splitPairs('abc'), ['ab', 'c_']);
 assert.deepEqual(splitPairs('abcdf'), ['ab', 'cd', 'f_']);
 assert.deepEqual(splitPairs('a'), ['a_']);
 assert.deepEqual(splitPairs(''), []);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
