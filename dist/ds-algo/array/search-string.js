"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
/*
search the target and return true or false
*/
function searchString(input, ch) {
    var found = false;
    input.split('').forEach(x => {
        if (x === ch && found == false) {
            found = true;
        }
    });
    return found;
}
console.log("String Search ...");
assert_1.default.equal(searchString("AkshayJoy", "A"), true);
assert_1.default.equal(searchString("AkshayJoy", "P"), false);
assert_1.default.equal(searchString("YY", "X"), false);
