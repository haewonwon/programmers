function solution(n) {
    let num = Math.sqrt(n);
    
    console.log(num)
    
    return Number.isInteger(num) ? (num + 1) ** 2 : -1
    
    
}