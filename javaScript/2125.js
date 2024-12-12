/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let countLines = 0
    let prev = 0
    for(let laser of bank) {
        let numLaser = laser.split('1').length - 1;
        if (numLaser) {
           countLines = prev * numLaser
           prev = numLaser
        }
    }
    return countLines
};

console.log(numberOfBeams(["011001","000000","010100","001000"]));
