function solution(arr) {
//     let minIndex = arr.indexOf(Math.min(...arr), 1)
//     arr.splice(minIndex)
    
//     return arr.length === 0 ? [-1] : arr
    
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}