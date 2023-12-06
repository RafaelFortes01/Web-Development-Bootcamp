var numbers = []

function insertNumbers() {
  var number = 1

  while(numbers.length < 100) {

    if(number % 3 == 0 && number % 5 == 0){
        numbers.push("FizzBuzz")
    }else if(number % 3 == 0){
        numbers.push("Fizz")
    }else if(number % 5 == 0){
        numbers.push("Buzz")
    }else {
        numbers.push(number)
    }
  number ++
}  
}

insertNumbers()

console.log(numbers)