function solution(A) {
  const sum = A.reduce((a, b) => a + b, 0)

  let head = A[0]
  let tail = sum - A[0]
  let min = Math.abs(head - tail)
  
  for (let element of A) {
    head += element
    tail -= element
    min = Math.min(min, Math.abs(head - tail))
  }

  return min
}
