/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let str = []
  for(let letter of s) {
    if (str[str.length - 1] == letter) {
      str.pop()
    } else {
      str.push(letter)
    }
  }
  return str.join('')
};

console.log(removeDuplicates("abbaca"));
