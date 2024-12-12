/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let arr = []
    let index = (k - 1)
    for(let i = 0; i <n; i++){
        arr[i] = `${i + 1}`
    }
    while(arr.length != 1){
        arr.splice(index, 1)
        console.log(index);
        
        index = (index + (k - 1)) % arr.length
    }
    return Number(arr[0])
};


console.log(findTheWinner(5, 2));
// 1 2 3 6