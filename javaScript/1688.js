/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let countMatches = 0;
    while(n != 1){
        countMatches += Math.floor(n / 2)
        if (n % 2) {
            n = Math.floor(n / 2) + 1
        } else {
            n = Math.floor(n / 2)
        }
    }
    return countMatches
};

console.log(numberOfMatches(7));
