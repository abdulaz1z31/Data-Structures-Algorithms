/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  let twice;
  let sum = (grid.length ** 2 * (grid.length ** 2 + 1)) / 2;
  let obj = {};
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (obj[grid[i][j]]) {
        twice = grid[i][j];
      } else {
        obj[grid[i][j]] = 1;
      }
      sum -= grid[i][j];
    }
  }
  return [twice, sum + twice];
};

console.log(
  findMissingAndRepeatedValues([
    [9, 1, 7],
    [8, 9, 2],
    [3, 4, 6],
  ])
);
