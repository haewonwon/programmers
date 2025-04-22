function solution(arr) {
    return arr.reduce((sum, digit) => sum + digit, 0) / arr.length
}