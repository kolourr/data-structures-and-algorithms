// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2){

  if(str1.length !== str2.length){
    return false
  }

  let obj = {}
  for(let val of str1){
    obj[val] ? obj[val] += 1 : obj[val] = 1
  }

  for(let val of str2){
    if(!obj[val]){
      return false
    }
    else{
      obj[val] -= 1
    }
  }

  return true

}


console.log(validAnagram('anagrams', 'anagrsma'))



