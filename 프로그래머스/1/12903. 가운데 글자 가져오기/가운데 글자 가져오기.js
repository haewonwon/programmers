function solution(s) {
    let arr = s.toString().split('');
    let n = arr.length
    let word = "";
    
    if (n % 2 === 0) {
        n = n / 2
        
        for (let i = n-1; i <= n; i++) {
            word += arr[i];
        }
    } else {
        n = (n + 1) / 2
        word += arr[n-1];
    }
    
    return word;
}