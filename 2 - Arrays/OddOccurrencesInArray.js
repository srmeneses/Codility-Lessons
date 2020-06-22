function solution(A) {
  let obj = {}

  for(let element of A){

    if (typeof obj[element] === 'undefined') {
      obj[element] = true
    } 
    else {
      delete obj[element]
    }
  }

  return +Object.keys(obj)[0]
}
