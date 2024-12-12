/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    let mas = []
    const fn = (arr) => {
        if (arr.length == 1) {
            return true
        }
        for(let i = 0; i < arr.length - 1; i++){
            if ((arr[i] + arr[i + 1]) % 2 == 0) {
                return false
            }
        }
        return true
    }
    for(let arr of queries) {
        let list = nums.slice(arr[0], arr[1] + 1)
        let res = fn(list)
        mas.push(res)
    }
    return mas
};

console.log(isArraySpecial([6,8,3,1], [[2,2]]));



