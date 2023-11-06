function fibonacciCalculator(num) {
    if (num == 1) {
        return 1
    }
    return num-2 + fibonacciCalculator(num-1)
}