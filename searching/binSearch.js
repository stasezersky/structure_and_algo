function binarySearch(arr, val){
    let start  = 0
    let end = arr.length - 1
    let  mid = Math.floor((start + end) / 2)
    while( arr[mid] !== val && start <= end ){
        if(val < arr[mid]){
            end = mid - 1
        } else {
            start = mid + 1
        }
        mid = Math.floor((end + start)/2)
    }
    return (arr[mid] === val) ? mid : -1
}

module.exports = binarySearch