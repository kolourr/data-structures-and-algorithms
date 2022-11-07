// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)

// Space Complexity - O(n)

// Bonus

// You must do this with constant or O(1) space and O(n) time.


//The Set object lets you store unique values of any type, whether primitive values or object references.
//The specification requires sets to be implemented "that, on average, provide access times that are sublinear on the number of elements in the collection". Therefore, it could be represented internally as a hash table (with O(1) lookup), a search tree (with O(log(N)) lookup), or any other data structure, as long as the complexity is better than O(N).
//By contrast, Sets are a keyed collection. Instead of using indices, Sets order their data using keys. A Set’s elements are iterable in the order of insertion, and it cannot contain any duplicate data. In other words, every item in a Set must be unique.
//By contrast, the methods used by Sets to search for, delete and insert items all have a time complexity of just O(1) — that means the size of the data has virtually no bearing on the run-time of these methods!

function countUniqueValues(arr){
    return new Set(arr).size
}


// console.log(countUniqueValues(([1 ,1,1,1,1,2])))
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) )
// console.log(countUniqueValues([-2,-1,-1,0,1]) )


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