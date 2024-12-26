/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let mas = [[]];

  for (let i = 0; i < nums.length; i++) {
    let len = mas.length;
    for (let j = 0; j < len; j++) {
      mas.push([...mas[j], nums[i]]);
    }
  }

  return mas;
};
