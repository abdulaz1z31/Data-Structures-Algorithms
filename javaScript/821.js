/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let arr = []
    let mas = []
    for(let i = 0; i < s.length ; i++){
        if (s[i] == c) {
            arr.push(i)
        }
    }
    for(let i = 0; i < s.length; i++) {
        let min  = 10000
        for(let number of arr) {
            if (Math.abs(i - number) < min) {
                min = Math.abs(i - number)
            }
        }
        mas.push(min)
    }
    return mas
};





let s = "aaab"
let c = "b"

console.log(shortestToChar(s, c));
