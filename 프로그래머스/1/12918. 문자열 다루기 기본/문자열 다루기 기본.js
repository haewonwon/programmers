function solution(s) {
    let arr = s.split("")
    const allAreNumeric = arr.every(item => !isNaN(Number(item)));
    
   if (!allAreNumeric) {
       return false
   } else {
        if (arr.length === 4 || arr.length === 6) {
            return true
        } else {
            return false
        }
    }
}