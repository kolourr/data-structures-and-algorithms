// Write a function which takes in a string and returns the count of each character in the string

function countCharString(str){

  let obj  = {}
  let arr = str.split("")

  arr.map(item => obj[item] ? obj[item] += 1 :  obj[item] = 1)
  return obj
}

console.log(countCharString('bkjdwgdkwegdkw'))
console.log(countCharString('baby'))