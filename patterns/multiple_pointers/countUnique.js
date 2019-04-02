const countUnique = (arr) => {
    if (!arr.length) return []
    let i = 0
    if (typeof arr[i] !== "number") throw new TypeError('one or more elements of the array are not numeric')
    const uniques = []
    uniques.push(arr[i])
    for(let j = i+1 ; j < arr.length; j++ ){
        if (typeof arr[j] !== "number") throw new TypeError('one or more elements of the array are not numeric')
        if(arr[j] !== arr[i]){
            uniques.push(arr[j])
            i = j
        }    
    }
    return uniques
}

module.exports = countUnique