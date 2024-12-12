/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let count = 1;
  let arr = [];
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      arr.push(count);
      count = 1;
    }
  }
  arr.push(count);

  
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log(maxPower("triplepillooooow"));
