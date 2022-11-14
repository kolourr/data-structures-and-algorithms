// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of the integer in the array. If the value is not found, return -1.

// Constraints:
// Time Complexity - O(log n)
// Space Complexity - O(1)

//First - find the pivot point of the rotates array
//Second - Find the portion that holds the target value
//Third - Binary search (Divide and conquer)

// https://javascript.plainenglish.io/algorithm-rotated-array-94d976be0ff3


function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;


  //First - find the pivot point
  //Case 1: The pivot point is to the right of the mid-point
  //Case 2: The pivot point is to the left or equal to the mid-point
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > right) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  //Second - Find the portion that holds the target value
  let pivot = left;
  left = 0;
  right = arr.length - 1;

  if (arr[pivot] <= num && num <= arr[right]) {
    left = pivot;
  } else {
    right = pivot;
  }

  //Binary Search - Divide and Conquer
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (num === arr[mid]) {
      return mid;
    }

    if (arr[mid] > num) {
      right = mid - 1;
    } else if (arr[mid] < num) {
      left = mid + 1;
    }
  }

  return -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11, 12, 13, 14, 15, 16, 3, 5, 7, 9], 16)); // 5
