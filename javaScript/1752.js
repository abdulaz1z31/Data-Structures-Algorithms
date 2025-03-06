/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  const sortedNums = [...nums].sort((a, b) => {
    return a - b;
  });
  const str1 = sortedNums.join(',')
  for(let i = 0; i < nums.length; i++){
    let newArr = [...nums.slice(i, nums.length), ...nums.slice(0, i)]
    const str2 = newArr.join(',')
    
    if (str1 == str2) {
      return true
    }
  }
  return false
};

let nums = [11,11,1,20];
console.log(check(nums));
