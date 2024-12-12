/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let min = Infinity
    for(let i = 0; i < nums.length; i++){
        let sum = 0
        for(let num of String(nums[i])){
            sum += Number(num)
        }
        if (min > sum) {
            min = sum
        }
    }
    return min
};

console.log(minElement([10, 11, 99]));
