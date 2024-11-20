/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let mas = [[]]; 
  
    for (let i = 0; i < nums.length; i++) {
      let len = mas.length;
      for (let j = 0; j < len; j++) {
        console.log([...mas[i]]);
        
        mas.push([...mas[j], nums[i]]);
      }
    }
  
    return 1;
  };
  

let nums = [1, 2, 3, 4];
console.log(subsets(nums));
