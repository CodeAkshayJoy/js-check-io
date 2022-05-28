/**
Find the nearest value to the given one.

You are given a list of values as Array form and a value for which you need to find the nearest one.

For example, we have the following set of numbers: 4, 7, 10, 11, 12, 17, and we need to find the nearest value to the number 9. If we sort this set in the ascending order, then to the left of number 9 will be number 7 and to the right - will be number 10. But 10 is closer than 7, which means that the correct answer is 10.

A few clarifications:

If 2 numbers are at the same distance, you need to choose the smallest one;
The set of numbers is always non-empty, i.e. the size is >=1;
The given value can be in this set, which means that it’s the answer;
The set can contain both positive and negative numbers, but they are always integers;
The set isn’t sorted and consists of unique numbers.
Input: Two arguments. A list of values in the Array form. The sought value is an int.

Output: Int.

Example:

nearestValue([4, 7, 10, 11, 12, 17], 9) == 10
nearestValue([4, 7, 10, 11, 12, 17], 8) == 7
nearestValue([4, 8, 10, 11, 12, 17], 9) == 8
nearestValue([4, 9, 10, 11, 12, 17], 9) == 9
nearestValue([4, 7, 10, 11, 12, 17], 0) == 4
 */
import assert from "assert";

function nearestValue(values: number[], search: number): number {
    var delta: [number, number][]=[];
    var distances:number[] = []
    values.forEach((value, index) => {
        delta.push([value, Math.abs(search-value)]);
        distances.push(Math.abs(search-value));
    })
    
    var minDistance = Math.min(...distances);
    let nearestValues =  delta.filter(x=> x[1] == minDistance).map(x=>x[0]);
    return Math.min(...nearestValues);
}

console.log('Example:');
console.log(nearestValue([0,-2], -1));

console.log(nearestValue([4, 7, 10, 11, 12, 17], 9));
//assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 9), 10);
//assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 8), 7);
//assert.equal(nearestValue([4, 8, 10, 11, 12, 17], 9), 8);
//assert.equal(nearestValue([4, 9, 10, 11, 12, 17], 9), 9);
//assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 0), 4);
//assert.equal(nearestValue([4, 7, 10, 11, 12, 17], 100), 17);
//assert.equal(nearestValue([5, 10, 8, 12, 89, 100], 7), 8);
//assert.equal(nearestValue([-1, 2, 3], 0), -1);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
