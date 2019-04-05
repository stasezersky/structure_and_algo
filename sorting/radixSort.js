
// theoretically it is faster than other sorts but if all numbers are distinct
// the O is nlogn because of somethin related to the way numbers are stored in the 
// system. It still should perform better than the comparsion algorithems because they
// also have some caveats. We should also note that it works with int's only
// 
const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i - 1)) % 10
}

const digitCount = (num) => {
    if(num === 0 ) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

const mostDigits = (arr) => {
    let most = 0
    arr.forEach(i => {
        most = Math.max(most, digitCount(i))
    })
    return most
}

const radixSort = (arr) => {
    const maxDigitCount = mostDigits(arr)
    for(let i = 1 ; i <= maxDigitCount ; i++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let j = 0 ; j < arr.length; j++){
            const digit = getDigit(arr[j], i+1)
            digitBuckets[digit].push(arr[j])
        }
        arr = [].concat(...digitBuckets)
    }
    return arr
}

// console.log(getDigit(1234, 4))
// console.log(digitCount(0))
console.log(radixSort([1556, 12345, 5523, 1, 63, 627]))