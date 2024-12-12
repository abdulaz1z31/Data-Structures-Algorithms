/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let len = 1;
    while (true) {
        const count = 9 * Math.pow(10, len - 1) * len;
        if (n > count) {
            n -= count;
            len++;
        } else {
            break;
        }
    }
    const number = Math.floor((n - 1) / len) + Math.pow(10, len - 1);
    
    const digitIndex = (n - 1) % len;
    return Number(String(number)[digitIndex]);
};


console.log(findNthDigit(3));


