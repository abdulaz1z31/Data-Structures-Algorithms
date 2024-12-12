/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let arr = []
    let len = code.length
    if (k > 0) {
        for(let i = 0; i < len; i++){
            let sum = 0
            for(let j = i + 1; j < i + 1 + k; j++){
                sum += code[j % len]
            }
            arr[i] = sum
        }
    } else if (k < 0) {
        for(let i = 0; i < len; i++){
            let sum = 0
            for(let j = len + i + k; j < i + len; j++){
                sum += code[j % len]
            }
            arr[i] = sum
        }
    } else {
        for(let i = 0; i < len; i++){
            arr[i] = 0
        }
    }
    return arr
};



let code = [2,4,9,3]; let k = 2

console.log(decrypt(code, k));

