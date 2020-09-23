function solution(A) {
    const sum = A.length * (A.length + 1) / 2 
    const realSum = A.reduce((a, b) => a + b, 0)
    return A.length + 1 - (realSum - sum)
}
