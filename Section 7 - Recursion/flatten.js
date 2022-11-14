//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattended
function flatten(arr){
    let newArr = []
    arr.forEach(item => {
        if(Array.isArray(item)){
            newArr.push(...flatten(item))
        }
        else{
            newArr.push(item)
        }
    })
    return newArr
}

console.log(flatten([[[0], [1]], [[2], [3]], [[4], [5]]]))
 //Using the flat() method
//  function flatten(arr){
//     return arr.flat().flat()
//  }