/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] <= min) {
      min = prices[i];
    } else {
      if (prices[i] - min > 0) {
        max += prices[i] - min;
        min = prices[i]
      }
    }
  }
  return max;
};

console.log(maxProfit([7,6,4,3,1]));
