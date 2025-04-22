function solution(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) sum += i;
    }

    return sum;
}


// function solution(n) {
//     let sumVal = 0;
    
//     for (let i = 0; i <= n; i++) {
//         if (n % i === 0) {
//             sumVal += i
//         }
//     }
    
//     return sumVal;
// }