/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let arr1 = [];
  let arr2 = [];
  for (let key of s) { 
    if (key == "#") {
      arr1.pop();
    } else {
      arr1.push(key);
    }
  }
  for (let key of t) {  
    if (key == "#") {
      arr2.pop();
    } else {
      arr2.push(key);
    }
  }
  return arr1.join("") == arr2.join("");
};

console.log(backspaceCompare("a#c", "b"));
