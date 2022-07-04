import assert from "assert";

/*
search the target and return true or false
*/
function searchString(input: string, ch: string): boolean {
    var found=false;
    input.split('').forEach(x=> {        
        if(x===ch && found==false) {
            found=true
        }
    })
    return found;
}

console.log("String Search ...");

assert.equal(searchString("AkshayJoy", "A"), true);
assert.equal(searchString("AkshayJoy", "P"), false);
assert.equal(searchString("YY", "X"), false);
