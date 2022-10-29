// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.


//Optimal - Frequency Counter solution
// Using an object and then a making a comparison
// Break it down into objects and then compare the objects
// Not 2 nested loops
// 2 separate loops better


function same(arr1, arr2){

  if(arr1.length !== arr2.length){
    return false
  }

  let obj1 ={}
  let obj2 = {}

for(let val of arr1){
  obj1[val] ? obj1[val] += 1 : obj1[val] = 1
}

for(let val of arr2){
  obj2[val] ? obj2[val] += 1 : obj2[val] = 1
}

for(let val in obj1){
  if(!(val ** 2 in obj2)){
    return false
  }
  if(obj2[val ** 2] !== obj1[val]){
    return false
  }
}

return true

}



//Naive Solution

// function same(arr1, arr2){

//   if(arr1.length !== arr2.length){
//     return false
//   }

//   for(let item of arr1){
//     let val = arr2.indexOf(item ** 2)
//     if(val === -1){
//       return false
//     }
//     arr2.splice(val,1)
//   }
//   return true
// }

console.log(same([1,2,3,2], [9,1,4,4]))
console.log(same([1,2,3,2], [1,4,9,4]))
console.log(same([1,4,5,2], [1,4,9,4]))