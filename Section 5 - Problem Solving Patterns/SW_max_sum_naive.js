// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.


// The naive solution is to use a nested loop
// The better solution is to use a sliding window where you are subtracting one number from the left side and then adding one to the other side
// With this solution you will only go over the array once



function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)


console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))