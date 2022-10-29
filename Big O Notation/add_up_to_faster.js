// function addUpTo(n) {
//   return n * (n + 1) / 2;
// }

// var time1 = performance.now();
// addUpTo(1000000000);
// var time2 = performance.now();
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)



function count(str){
  let ans = {}
  let arr = str.split("")
  arr.forEach(item => {
    if(item.match(/[0-9a-zA-Z]/g)){
      ans[item] = ans[item] + 1 || 1
    }
     }) 
  return ans 
}

console.log(count("Hello!! hi"))