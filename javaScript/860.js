/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;
  let balance = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] == 5) {
      balance += 5;
      five++;
    } else if (bills[i] == 10) {
      if (balance >= 5 && five > 0) {
        balance += 5;
        five--;
        ten++;
      } else {
        return false;
      }
    } else {
      if (balance >= 15 && ten >= 1 && five >= 1) {
        ten--;
        five--;
        balance += 5;
      } else if (balance >= 15 && five >= 3) {
        five -= 3;
        balance += 5;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 10, 10, 20]));
