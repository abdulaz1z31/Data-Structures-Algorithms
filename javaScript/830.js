/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  let arr = [];
  let last = -1;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] != s[i + 1]) {
      if (i - last > 2) {
        arr.push([last + 1, i]);
      }
      last = i
    } 
  }
  
  if (s[s.length - 1] == s[s.length - 2]) {
    if (s.length - last  - 1 > 2) {
      arr.push([last + 1, s.length - 1])
    }
  }
  return arr;
};

console.log(largeGroupPositions("aa"));
// console.log(largeGroupPositions("aaa"));
