function solution(A) {
    N = A.length
    minV = (A[0] + A[1]) / 2.0;
    minP = 0;

    for (i = 0; i < N-2; i++) {
        tempMinV = Math.min((A[i] + A[i + 1]) / 2.0, (A[i] + A[i + 1] + A[i + 2]) / 3.0);

        if (tempMinV < minV) {
            minV = tempMinV;
            minP = i;
        }
    }

    if (((A[N - 2] + A[N - 1]) / 2.0) < minV) {
        minP = N - 2;
    }

    return minP;
}

