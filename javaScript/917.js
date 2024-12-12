/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let str = ''
    let i = str.length - 1
    let res = ''
    for(let char of s){
        if (char.toLowerCase() != char.toUpperCase()) {
            str += char
        }
    }    
    for(let char of s){
        if (char.toLowerCase() != char.toUpperCase()) {
            res += str[i]
            i--
        } else {
            res += char
        }
    }
    return res
};


console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
