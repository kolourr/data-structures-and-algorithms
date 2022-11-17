// Write a recursive function called reverse which accepts a string and returns a new string in reverse.



function reverse(str){
  if(str.length == 0) return ''
  return reverse(str.slice(1)) + str.charAt(0)
}



console.log(reverse('charlieboy'))
console.log(reverse('danger'))
console.log(reverse('3'))


