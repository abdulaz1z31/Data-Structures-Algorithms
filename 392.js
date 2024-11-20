/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length > t.length) {
        return false
    }
    let counter = 0
    for(let char of t) {
        if (s[counter] === char) {
            counter++
        }
    }
    return counter == t.length
};

let s = "ab"
let t = "baab"

console.log(isSubsequence(s, t));
