"use strict";
/*
You are given a string and two markers (the initial one and final). You have to find a substring enclosed between these two markers. But there are a few important conditions.

This is a simplified version of the Between Markers mission.

The initial and final markers are always different.
The initial and final markers are always 1 char size.
The initial and final markers always exist in a string and go one after another.
Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.

Output: A string.

Example:

betweenMarkers('What is >apple<', '>', '<') == 'apple'
betweenMarkers('What is [apple]', '[', ']') == 'apple'
betweenMarkers('What is ><', '>', '<') == ''
betweenMarkers('[an apple]', '[', ']') == 'an apple'
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function betweenMarkers(line, left, right) {
    var lineArray = line.split('');
    var leftIndex = -1;
    var rightIndex = -1;
    leftIndex = lineArray.findIndex(x => x === left);
    rightIndex = lineArray.findIndex(x => x === right);
    return lineArray.slice(leftIndex + 1, rightIndex).join('');
}
console.log('Example:');
console.log(betweenMarkers('What is >apple<', '>', '<'));
// These "asserts" are used for self-checking
assert_1.default.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple');
assert_1.default.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple');
assert_1.default.equal(betweenMarkers('What is ><', '>', '<'), '');
assert_1.default.equal(betweenMarkers('[an apple]', '[', ']'), 'an apple');
console.log("Coding complete? Click 'Check' to earn cool rewards!");
