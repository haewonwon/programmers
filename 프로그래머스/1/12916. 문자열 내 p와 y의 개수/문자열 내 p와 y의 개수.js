function solution(s){
    let p = s.toLowerCase().split('p').length -1
    let y = s.toLowerCase().split('y').length -1
    
    return p === y ? true : false
}