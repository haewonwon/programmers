function solution(x) {
    let sum = x.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
    
    return x % sum === 0 ? true : false;
}