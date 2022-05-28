"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function nearestValue(values, search) {
    var delta = [];
    var distances = [];
    values.forEach((value, index) => {
        delta.push([value, Math.abs(search - value)]);
        distances.push(Math.abs(search - value));
    });
    var minDistance = Math.min(...distances);
    let nearestValues = delta.filter(x => x[1] == minDistance).map(x => x[0]);
    return Math.min(...nearestValues);
}
console.log('Example:');
console.log(nearestValue([0, -2], -1));
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
