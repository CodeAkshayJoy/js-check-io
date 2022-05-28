import assert from "assert";

function correctSentence(text: string): string {
    var textArray= text.split('');
    textArray[0]= textArray[0].toUpperCase();
    if(textArray[textArray.length-1]!='.'){
        textArray.push(".");
    }
    return textArray.join('');
}

console.log('Example:');
console.log(correctSentence('greetings, friends'));

// These "asserts" are used for self-checking
assert.equal(correctSentence('greetings, friends'), 'Greetings, friends.');
assert.equal(correctSentence('Greetings, friends'), 'Greetings, friends.');
assert.equal(correctSentence('Greetings, friends.'), 'Greetings, friends.');

console.log("Coding complete? Click 'Check' to earn cool rewards!");
