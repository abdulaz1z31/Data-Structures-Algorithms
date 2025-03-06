/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let mas = []

    for(let i = 0; i < matrix[0].length; i++) {
      let arr = []
      for(let j = 0; j < matrix.length; j++){
        arr.push(matrix[j][i])
      }
      mas.push(arr)
    }
    return mas
};

console.log(transpose([[1,2,3],[4,5,6]]));
