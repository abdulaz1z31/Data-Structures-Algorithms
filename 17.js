/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let letter = {
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz",
    }
    let arr = []
    if (!letter[digits]) { 
        return []
    } else if (digits.length == 1) {
        return letter[digits].split("")
    }
    for(let i = 0; i < digits.length; i++){
        const char = letter[digits[i]]
        for(let j = i + 1; j < digits.length; j++){
            
        }
    }

};
console.log(letterCombinations("1"));
//halid davom qilaman 