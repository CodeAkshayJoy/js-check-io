"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
/*
search the target and return true or false
*/
function searchInRange(arr, target, start, end) {
    for (let i = start; i <= end; ++i) {
        if (arr[i] === target)
            return true;
    }
    return false;
}
console.log("Search In Range...");
assert_1.default.equal(searchInRange([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], 2, 2, 4), true);
assert_1.default.equal(searchInRange([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], 1232, 2, 4), false);
assert_1.default.equal(searchInRange([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], 28, 7, 9), true);
