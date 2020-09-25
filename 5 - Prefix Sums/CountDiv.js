function solution(A, B, K) {

    if (A % K != 0) {
        A = A + (K - A % K)
    }

    if (A > B) {
        return 0
    }
    
    return Math.floor((B - A) / K) + 1
}
