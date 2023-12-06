function fibonacciGenerator(n) {
    let sequence = [0, 1]
    let numberOne = sequence[0]
    let numberTwo = sequence[1]

    while(n != sequence.length){

        sequence.push(sequence[numberOne] + sequence[numberTwo])
        numberOne ++
        numberTwo ++

    }
    return sequence
}

fibonacciGenerator(13)