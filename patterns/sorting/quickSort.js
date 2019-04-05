function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    let swapIdx = start
    const pivot = arr[start]

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) 
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 

console.log(quickSort([25 ,10, 202, 5, 25, 24, 76, 73, 1, 40, 100]))