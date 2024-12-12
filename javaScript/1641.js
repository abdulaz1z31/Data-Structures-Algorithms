/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    const factorial = (n) => {
        let res = 1
        for(let i = 1; i <= n; i++){
            res *= i
        }
        console.log(res);
        
        return res
    }

    return (factorial(n + 4) / (factorial(4) * factorial(n)))
};
console.log(countVowelStrings(2));

//1 - 5
//2 - 15
//3 - 35
//4 - 70

