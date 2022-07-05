"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildArray(nums) {
    let results = [];
    nums.forEach((num, index) => {
        results.push(nums[nums[index]]);
    });
    return results;
}
;
console.log("Build Array Permutation ...");
buildArray([0, 2, 1, 5, 3, 4]);
buildArray([5, 0, 1, 2, 3, 4]);
