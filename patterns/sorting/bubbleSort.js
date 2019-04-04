
// On^2 if data isn't sorted , if sorted is On

const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i >= 0; i-- ){
        let swap = false

        for(let j = 0 ; j <= i ; j++){

            if(j !== i && arr[j] > arr[j+1]){
                // console.log(arr[j]);
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
                swap = true
            }
        }
        if(!swap) return arr
    }
    return arr
}



// console.log(bubbleSort([40, 100, 1, 5, 25, 10]))
console.log(bubbleSort([1,2,4,5,10,6]))