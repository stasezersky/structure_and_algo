
// usually On^2 , but if we woried about writing to the system - it is better than bubble sort but usually it is same complexity of On^2

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}



// console.log(selectionSort([40, 100, 1, 5, 25, 10]))
console.log(selectionSort([1, 2, 4, 5, 10, 6]))