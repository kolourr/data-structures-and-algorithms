// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1


//Binary Search - Divide and Conquer
//Time Complexity - Log(N) - Log base 2 of n
//The array has to be sorted for this to work
//Keep dividing and finding if the middle is greater or less than
function search(arr, num){

  let min = 0
  let max = arr.length - 1

  while (min <= max){

    let middle = Math.floor((min+max)/2)
    let currentElement = arr[middle]

    if(currentElement < num){
      min = middle + 1
    }
    else if(currentElement > num){
      max = middle - 1
    }
    else {
      return middle
    }

  }

  return -1

}




console.log(search([1,2,3,4,5,6],4))
console.log(search([1,2,3,4,5,6],6))
console.log(search([1,2,3,4,5,6],11))



//Naive Solution
//Time Complexity - O(N)
//Linear Search
// function search(arr, val){
//   for(let i = 0; i < arr.length; i++){
//       if(arr[i] === val){
//           return i;
//       }
//   }
//   return -1;
// }


//Binary Search
//Time Complexity - Log(N) - Log base 2 of n
//The array has to be sorted for this to work
//Keep dividing and finding if the middle is greater or less than

// function search(array, val) {

//   let min = 0;
//   let max = array.length - 1;

//   while (min <= max) {
//       let middle = Math.floor((min + max) / 2)
//       let currentElement = array[middle]

//       if (currentElement < val) {
//           min = middle + 1;
//       }
//       else if (currentElement > val) {
//           max = middle - 1;
//       }
//       else {
//           return middle;
//       }
//   }

//   return -1;
// }

// console.log(search([1,2,3,4,5,6],4))
// console.log(search([1,2,3,4,5,6],6))
// console.log(search([1,2,3,4,5,6],11))


