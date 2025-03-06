/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let mas = [];
  for (let i = 0; i < nums2.length; i++) {
    const index = nums1.indexOf(nums2[i])
    if (index != -1) {
      for(let j = i; j < nums2.length; j++){
        if (nums2[j] > nums2[i]) {
          mas[index] = nums2[j]
          break;
        }
        mas[index] = -1
      }
    }
  }
  return mas
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
