const validAnagram = (str1, str2) => {
    if(typeof str1 !== 'string'|| typeof str2 !== 'string') return false
    const obj1 = {}
    for (const char of str1) {
        obj1[char] = (obj1[char] || 0) + 1
    }
    const obj2 = {}
    for (const char of str2) {
        obj2[char] = (obj2[char] || 0) + 1
    }
    for (const key in obj1) { 
        if(!obj2[key] || obj1[key]!==obj2[key]) return false
    }
    return true

}
module.exports = validAnagram