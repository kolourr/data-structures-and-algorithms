// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2){

  if(str1.length !== str2.length){
    return false
  }

  let obj = {}
  //get count of first string
  for(let val of str1){
    obj[val] ? obj[val] += 1 : obj[val] = 1
  }

  //check values of second string for match
  for(let val of str2){
    if(!obj[val]){
      return false
    }
    else{
      //delete one at a time
      obj[val] -= 1
    }
  }

  return true

}


console.log(validAnagram('anagrams', 'anagrsma'))



