function validAnagram(str1, str2){

    if(str1.length !== str2.length) return false 

    let obj = {}

    for(let i=0; i<str1.length; i++){
      let val = str1[i]
      obj[val] ? obj[val] +=1 : obj[val] = 1
    }

    for(let i=0; i<str2.length; i++){
      let val = str2[i]
      if(!obj[val]){
        return false 
      }
      else{
        obj[val] -= 1
      }
    }

    return true 
}



// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//   }
//   console.log(lookup)

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram('anagrams', 'anagrsma'))