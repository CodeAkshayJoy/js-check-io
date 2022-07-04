import assert from "assert";

/*
search the target and return true or false
*/
function searchInRange(arr: number[], target: number, start: number, end:number): boolean{
    for(let i=start; i<=end; ++i){
        if(arr[i]===target) return true;
    }
    return false;
}


console.log("Search In Range...");

assert.equal(searchInRange([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], 2,2,4), true);
assert.equal(searchInRange([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], 1232,2,4), false);
assert.equal(searchInRange([23, 45, 1, 2, 8, 19, -3, 16, -11, 28], 28,7,9), true);
