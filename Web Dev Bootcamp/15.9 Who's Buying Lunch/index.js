function whosPaying(){
    var names = ["Carlos", "Pedro", "Larissa", "Rafael"]

    var randomNumber = Math.floor(Math.random() * names.length)

    return names[randomNumber] + " is going to buy  lunch today!"
}

whosPaying()