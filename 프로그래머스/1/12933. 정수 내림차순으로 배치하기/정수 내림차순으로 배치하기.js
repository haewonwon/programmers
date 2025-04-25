function solution(n) {
    let arr = n.toString().split('').map(Number)
    arr.sort(function(a, b)  {
        return b - a;
    });
    
    return Number(arr.join(''))
}