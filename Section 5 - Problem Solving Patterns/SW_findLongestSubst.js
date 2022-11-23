//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters


// using a Set - Time Complexity is O(N) and space complexity is O(1)
function findLongestSubstring(str){
  let start = 0
  let end = 0
  let longest = 0
  let uniqueChar = new Set()

  while(end < str.length){
    if(!uniqueChar.has(str[end])){
      uniqueChar.add(str[end])
      end++
      longest = Math.max(longest, uniqueChar.size)
    }
    else{
      uniqueChar.delete(str[start])
      start++
    }

  }
  return longest
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6

