function solution(x, n) {
    const arr = [];
    
    for (let i = 1; i <= n; i++) {
        arr.push(x * i);
    }
    return arr;
}

// function solution(x, n) {
//     let arr = [];
    
//     if (x > 0) {
//         for (let i = x; i <= (x*n); i+=x) {
//             arr.push(i);
//         }
//     } else if (x < 0) {
//         for (let i = x; i >= (x*n); i+=x) {
//             arr.push(i);
//         }
//     } else {
//         while (n > 0) {
//             arr.push(x);
//             n--;
//         }
//     }
    
//     return arr;
// }