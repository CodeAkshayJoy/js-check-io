"use strict";
//https://leetcode.com/problems/median-of-two-sorted-arrays/
/*
procedure merge( var a as array, var b as array )

   var c as array
   while ( a and b have elements )
      if ( a[0] > b[0] )
         add b[0] to the end of c
         remove b[0] from b
      else
         add a[0] to the end of c
         remove a[0] from a
      end if
   end while
   
   while ( a has elements )
      add a[0] to the end of c
      remove a[0] from a
   end while
   
   while ( b has elements )
      add b[0] to the end of c
      remove b[0] from b
   end while
   
   return c
    
end procedure
*/
function mergeSortedArrays(nums1, nums2) {
    var results = [];
    let i = 0;
    let j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            results.push(nums1[i]);
            i++;
        }
        else {
            results.push(nums2[j]);
            j++;
        }
    }
    while (i < nums1.length) {
        results.push(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        results.push(nums2[j]);
        j++;
    }
    console.log(results);
    return results;
}
;
function findMedianSortedArrays(nums1, nums2) {
    var results = mergeSortedArrays(nums1, nums2);
    var median = Number.MAX_SAFE_INTEGER;
    if (results.length % 2 == 0) {
        return (results[Math.floor(results.length / 2) - 1] + results[Math.floor(results.length / 2)]) / 2;
    }
    else {
        return results[Math.ceil(results.length / 2) - 1];
    }
}
;
mergeSortedArrays([1, 2, 4], [1, 1, 1]);
console.log(findMedianSortedArrays([1, 2, 4], [1, 1, 1]));
mergeSortedArrays([1, 3], [2]);
console.log(findMedianSortedArrays([1, 3], [2]));
