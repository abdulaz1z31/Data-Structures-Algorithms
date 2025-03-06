/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const obj = {};
  let arr = [...s1.split(" "), ...s2.split(" ")];
  for (let key of arr) {
    if (obj[key]) {
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  }
  return Object.keys(obj).filter((key) => obj[key] === 1);
};

console.log(uncommonFromSentences("apple apple", "banana"));
