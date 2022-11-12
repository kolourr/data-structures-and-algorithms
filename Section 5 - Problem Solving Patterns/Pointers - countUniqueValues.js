// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.


function countUniqueValues(arr){
    return new Set(arr).size
}




//Multiple Pointers
// You must do this with constant or O(1) space and O(n) time.

function countUniqueValues(arr){
    if(arr.length == 0) return 0
    let i = 0

    for(let j=0; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
         }
    }

    return i + 1
}


console.log(countUniqueValues(([1 ,1,1,1,1,2])))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) )
console.log(countUniqueValues([-2,-1,-1,0,1]) )