/**
You are given a string where you have to find its first word.

This is a simplified version of the First Word mission.

Input string consists of only english letters and spaces.
There aren’t any spaces at the beginning and the end of the string.
Input: A string.

Output: A string.

Example:
firstWord("Hello world") == "Hello"


There is no way to stop or break a forEach() loop other than by throwing an exception. 
If you need such behavior, the forEach() method is the wrong tool, use a plain loop instead. 
If you are testing the array elements for a predicate and need a Boolean return value, you can use every() or some() instead.


 */
import assert from "assert";

function firstWord(text: string): string {
    return text.split(' ')[0];
}

console.log('Example:');
console.log(firstWord('Hello world'));

// These "asserts" are used for self-checking
assert.equal(firstWord('Hello world'), 'Hello');
assert.equal(firstWord('a word'), 'a');
assert.equal(firstWord('hi'), 'hi');

console.log("Coding complete? Click 'Check' to earn cool rewards!");
