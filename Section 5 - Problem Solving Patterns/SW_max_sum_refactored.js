// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

//Sliding Window
//Time Complexity - O(N)
//Basically subtracing a value from the left side and then adding a value to the right side


function maxSubarraySum(arr, num){
  if(num > arr.length) return null
  let maxSum = arr.slice(0, num).reduce((a,b) => a + b, 0)
  let tempSum = maxSum

  for(let i= num; i<arr.length; i++){n
     tempSum = tempSum - arr[i - num] + arr[i]
     maxSum = Math.max(tempSum, maxSum)
  }
  return maxSum

}


console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))




// function maxSubarraySum(arr, num){
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;

//   //Store the sum of the first few digits in the maxsum variable
//   // for (let i = 0; i < num; i++) {
//   //   maxSum += arr[i];
//   // }
//   maxSum = arr.slice(0,num).reduce((a,b) => a + b, 0)
//   tempSum = maxSum;

//   //Now we start the loop at num
//   //Then add two and subtract one
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }

// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))

