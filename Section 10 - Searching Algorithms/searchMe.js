function searchMe(arr, val){

    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)

    while(arr[middle] !== val && start <= end){
        if(val < arr[middle]) end = middle - 1
        else start = middle + 1
        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] == val ? middle : - 1


}

console.log(searchMe([1,4,7,9,11,34,56,78,90], 56))