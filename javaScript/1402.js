// /**
//  * @param {number[]} satisfaction
//  * @return {number}
//  */
// var maxSatisfaction = function (satisfaction) {
//   let sum = 0;
//   let obj = {};
//   for (let i = 0; i < satisfaction.length; i++) {
//     obj[satisfaction[i]] = i + 1;
//   }
//   console.log(obj);
  
//   satisfaction = satisfaction.sort((a, b) => {
//     return a - b;
//   });
//   for (let num of satisfaction) {
//     if (num > 0) {
//       sum += num * obj[num];
//     }
//   }
//   return sum;
// };

// console.log(maxSatisfaction([4,3,2]));

