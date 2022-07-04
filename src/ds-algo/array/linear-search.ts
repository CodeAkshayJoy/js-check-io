import assert from "assert";

/*
search the target and return true or false
*/
function linearSearch(arr: number[], target: number): boolean {
    var found=false;
    arr.forEach(x=> {        
        if(x===target && found==false) {
            found=true
        }
    })
    return found;
}

// search the target and return the element
function linearSearchNumber(arr: number[], target: number): number{
    for(let i=0; i< arr.length; ++i){
        if(arr[i]===target) return arr[i]
    }
    return Number.MAX_SAFE_INTEGER;
}

// search in the array: return the index if item found
    // otherwise if item not found return -1
function linearSearchByIndex(arr: number[], target: number): number{
    for(let i=0; i< arr.length; ++i){
        if(arr[i]===target) return (i+1);
    }
    return -1;
}


console.log("Linear Search ...");

assert.equal(linearSearch([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], 2), true);
assert.strictEqual(linearSearch([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], -11), true);
assert.strictEqual(linearSearch([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], -1111), false);

assert.equal(linearSearchNumber([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], 2), 2);
assert.strictEqual(linearSearchNumber([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], -11), -11);
assert.strictEqual(linearSearchNumber([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], -1111), Number.MAX_SAFE_INTEGER);



assert.strictEqual(linearSearchByIndex([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], 2), 4);
assert.strictEqual(linearSearchByIndex([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], -11), 9);
assert.strictEqual(linearSearchByIndex([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], -1111), -1);
