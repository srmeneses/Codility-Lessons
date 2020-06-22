function solution(A, K) {
  return A.splice(A.length - (K % A.length), (K % A.length)).concat(A)
}
