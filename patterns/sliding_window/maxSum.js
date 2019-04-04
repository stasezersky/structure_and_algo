const maxSum = (arr, num) => {
    if (!arr.length || arr.length < num) return null
    let maxSum = 0
    let tempSum = 0
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for (let j = num; j < arr.length; j++) {
        tempSum = tempSum + arr[j] - arr[j - num]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}

module.exports = maxSum
