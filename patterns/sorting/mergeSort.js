const merge = (left, right) => {
    let results = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            results.push(right[j])
            j++
        } else {
            results.push(left[i])
            i++
        }
    }
    while (i < left.length) {
        results.push(left[i])
        i++
    }
    while (j < right.length) {
        results.push(right[j])
        j++
    }
    return results
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    const left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)))
    const right = mergeSort(arr.slice(Math.floor(arr.length / 2)))
    return merge(left, right)
}

console.log(mergeSort([10, 5, 25,24, 76, 73 , 1, 40, 100]))