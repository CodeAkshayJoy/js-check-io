"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
function correctSentence(text) {
    var textArray = text.split('');
    textArray[0] = textArray[0].toUpperCase();
    if (textArray[textArray.length - 1] != '.') {
        textArray.push(".");
    }
    return textArray.join('');
}
console.log('Example:');
console.log(correctSentence('greetings, friends'));
// These "asserts" are used for self-checking
assert_1.default.equal(correctSentence('greetings, friends'), 'Greetings, friends.');
assert_1.default.equal(correctSentence('Greetings, friends'), 'Greetings, friends.');
assert_1.default.equal(correctSentence('Greetings, friends.'), 'Greetings, friends.');
console.log("Coding complete? Click 'Check' to earn cool rewards!");
