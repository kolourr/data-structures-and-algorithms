// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.


// Time Complexity - O(n)

function findAllDuplicates(arr){

  let obj = {}
  for(let num of arr){
    obj[num] ? obj[num] += 1 : obj[num] = 1
  }

  let newArr = []

  for(let key in obj){
    if(obj[key] > 1){
      newArr.push(key)
    }
  }
  return newArr

}

console.log(findAllDuplicates([4,3,2,7,8,2,3,1])) // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])) // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])) // array with 3, 2, and 1


