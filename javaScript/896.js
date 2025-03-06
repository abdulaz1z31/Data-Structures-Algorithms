/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let rev = true
  let mat = true
  for (let i = 0; i < nums.length -1; i++) {
    if (nums[i] > nums[i + 1]) {
      rev = false
    }
    if (nums[i] < nums[i + 1]) {
      mat = false
    }
  }
  return rev || mat
};

console.log(isMonotonic([1, 2, 3]));
