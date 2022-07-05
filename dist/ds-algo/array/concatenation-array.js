"use strict";
// https://leetcode.com/problems/concatenation-of-array/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function getConcatenation(nums) {
    return [...nums, ...nums];
}
;
assert_1.default.equal(getConcatenation([1, 2, 1]), [1, 2, 1, 1, 2, 1]);
assert_1.default.equal(getConcatenation([1, 3, 2, 1]), [1, 3, 2, 1, 1, 3, 2, 1]);
