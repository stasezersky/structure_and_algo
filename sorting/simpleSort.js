// when using built in sort - it converting the elements into strings, then comparing their sequences of UTF-8 code units values 
// it also accepts optional function(a,b) : if function return < 0 -> a gets lower index than b an VV, if =0 ->  order unchanged

const simpleSort = (arr) => {
    return arr.sort((a, b) => a.val - b.val)
}

console.log(simpleSort([{ val: 2 }, { val: 4 }, { val: 1 }, { val: 8 }, { val: 4 }]))
