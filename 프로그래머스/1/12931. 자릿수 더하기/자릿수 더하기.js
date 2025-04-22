function solution(n) {
    return n
        .toString()
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);
}


// function solution(n)
// {
//     let answer = 0;
    
//     n = n.toString().trim();
//     let arr = (n + '').split('').map(Number);
    
//     for (let i = 0; i < arr.length; i++) {
//         answer += arr[i];
//     }
    
//     return answer;
// }