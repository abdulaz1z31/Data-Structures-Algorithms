/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let set = new Set(nums)
    for(let i = 0; i < nums.length; i++){
        let revNum = Number(String(nums[i]).split("").reverse().join(""))
        set.add(revNum)
    }
    return set.size
};

console.log(countDistinctIntegers([1, 112, 133]));
