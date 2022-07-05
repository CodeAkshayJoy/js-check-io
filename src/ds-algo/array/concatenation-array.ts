// https://leetcode.com/problems/concatenation-of-array/

import assert from "assert";




function getConcatenation(nums: number[]): number[] {
    return [...nums, ...nums]
};


assert.equal(getConcatenation([1,2,1]), [1,2,1,1,2,1]);
assert.equal(getConcatenation([1,3,2,1]), [1,3,2,1,1,3,2,1]);