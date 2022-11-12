// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Time - O(n) /Space - O(n)
// Bonus:
// Time - O(n log n)/Space - O(1)


function areThereDuplicates(...arr){
  if(arr.length ==0) return false
  let obj = {}

  for(let char of arr){
    obj[char] ? obj[char] += 1 : obj[char] = 1
  }
  return Object.values(obj).some(item => item > 1)
}


function areThereDuplicates(...arr){
  return new Set(arr).size !== arr.length
}


console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
console.log(areThereDuplicates('a', 'b', 'c', 'd')) // false








