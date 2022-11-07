// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Frequency Counter Problem
//Time: O(N)
function sameFrequency(num1, num2){
  let str1 = num1.toString().split("")
  let str2 = num2.toString().split("")

  if(str1.length !== str2.length) return false

  let obj = {}
  for(let char of str1){
    obj[char] ? obj[char] += 1 : obj[char] = 1
  }

  for(let char of str2){
    if(!obj[char]){
      return false
    }
    else{
      obj[char] -= 1
    }
  }

    return true
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false
console.log(sameFrequency(78654,46785)) // true







