function solution(s) {
    let min = s.split(" ").sort((a, b) => a - b)
    let max = s.split(" ").sort((a, b) => b - a)
    return min[0] + " "+ max[0]

}