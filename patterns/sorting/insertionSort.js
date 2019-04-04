
// usually On^2 , but if we woried about writing to the system - it is better than bubble sort but usually it is same complexity of On^2

const insertionSort = (arr) => {
    for (var i = 1; i < arr.length; i++) {
        current = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = current
    }
    return arr
}



// console.log(insertionSort([40, 100, 1, 5, 25, 10]))
console.log(insertionSort([1, 2, 4, 5, 10, 6]))