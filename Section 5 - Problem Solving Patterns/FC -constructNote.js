// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.


function constructNote(message, letters){

  let obj = {}
  for(let char of letters){
    obj[char] ? obj[char] += 1 : obj[char] = 1
  }

  for(let char of message){
     if(!obj[char]){
      return false
    }
    else{
      obj[char] -= 1
    }
  }
  return true
}


console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'bcabcaddff')) // true


