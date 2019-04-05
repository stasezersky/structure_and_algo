
// worst case is On^2  but if almost sorted  - 
// also good for online Algorithm - when data is incomming in chunks and we need to sort every chunk at the moment it comes in 
const insertionSort = (arr) => {
    for(let i = 1; i < arr.length ; i++){
        let current = arr[i]
        for(var j = i - 1; j >= 0 && arr[j] >= current; j-- ){
            arr[j+1] = arr[j]
        }
        arr[j + 1] = current
    }
    return arr
}



console.log(insertionSort([40, 100, 1, 5, 25, 10]))
// console.log(insertionSort([1, 2, 4, 5, 10, 6]))