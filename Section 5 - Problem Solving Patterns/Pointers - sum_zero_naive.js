// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

//Naive Solution O(N2)


//2 Pointers Optiomal Solution
//Time Compplexity - O(N)
//Space Complexity O(1)




console.log(sumZero([-3,-2,-1,0,1,2,3]))
console.log(sumZero([-2,0,1,3]) )
console.log(sumZero([1,2,3]) )





// function sumZero(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }
// console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))



// function countUniqueValues(arr){
//     if(arr.length == 0) return 0
//     let newArr = []
//     let i = 0
//     let j = 1
//     newArr.push(arr[i])

//     while(j < arr.length){
//         if(!newArr.includes(arr[j]) && arr[i] != arr[j]){
//             newArr.push(arr[j])
//             i = j
//             j++
//         }
//         else{
//             j++
//         }
//     }
//      return newArr.length
// }


// function countUniqueValues(arr){
//     if(arr.length == 0) return 0
//     let i =0
//     for(let j=0; i=j<arr.length; j++){
//         if(arr[i] !== arr[j]){
//             i++
//             arr[i]=arr[j]
//         }
//     }
//     return i + 1
// }


// countUniqueValues([-2,-1,-1,0,1])

// countUniqueValues([-4,-4,-4,-5,-5,-5,-5,-4,-4,-3,3,4,5,0,1,2,-2,-1,0,1,2,5])
