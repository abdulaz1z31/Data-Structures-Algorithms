/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr = []
    let sum = 0
    for(let operation of operations){
        if (operation == 'C') {
            arr.splice(arr.length - 1, 1)
        } else if (operation == "D") {
            arr.push((arr[arr.length - 1] * 2))
        } else if (operation == '+') {
            let sum = 0
            let l = arr.length - 1
            sum += arr[l] + arr[l - 1]
            arr.push(sum)
        } else {
            arr.push(Number(operation))
        }
    }
    for(let num of arr){
        sum += num
    }
    return sum
};


console.log(calPoints(["5","-2","4","C","D","9","+","+"]));





