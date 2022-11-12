// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.


// Time Complexity - O(log n)

function countZeroes(arr){

  let left = 0
  let right = arr.length - 1

  while(left <= right){

    let middle = Math.floor((left+right)/2)
    let currentElement = arr[middle]

    //trying to find the last 1
    if(currentElement === 1){
      left = middle + 1
    }
    else{
      right = middle - 1
    }
  }
  return arr.length - left
}


console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0





