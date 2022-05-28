/**
 (At the top right of the mission description there is always a list of available translations)

This is an intro mission, the purpose of which is to explain how to solve missions on CheckiO and how to get the most out of solving them. As you solve missions more stations become available to you, containing more complex missions.

This mission is the easiest one. Write a function that will receive 2 numbers as input and it should return the multiplication of these 2 numbers.

Input: Two arguments. Both are of type int.

Output: Int.

Example:

multTwo(2, 3) == 6
multTwo(1, 0) == 0
 */

import assert from "assert";

function multTwo(a: number, b: number): number {
    return a * b;
}

console.log("Example:");
console.log(multTwo(3, 2));

// These "asserts" are used for self-checking
assert.strictEqual(multTwo(3, 2), 6);
assert.strictEqual(multTwo(0, 1), 0);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
