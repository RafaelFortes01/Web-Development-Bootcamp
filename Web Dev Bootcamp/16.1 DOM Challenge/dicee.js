function diceRoll(){
    let player1 = Math.floor((Math.random()*6) + 1)
    let player2 = Math.floor((Math.random()*6) + 1)

    let dicePlayer1 = "dice" + player1 + ".png"
    let dice1 = "images/" + dicePlayer1

    let dicePlayer2 = "dice" + player2 + ".png"
    let dice2 = "images/" + dicePlayer2


    // Testes
    console.log(player1);
    console.log(player2);
    //

    //Lógica dos dados
    if(player1 > player2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!" 
        document.querySelector(".img1").setAttribute("src", dice1)
        document.querySelector(".img2").setAttribute("src", dice2)
     }else if(player1 < player2) {
         document.querySelector("h1").innerHTML = "Player 2 Wins!"
         document.querySelector(".img1").setAttribute("src", dice1)
         document.querySelector(".img2").setAttribute("src", dice2)
     }else {
         document.querySelector("h1").innerHTML = "Draw!"
         document.querySelector(".img1").setAttribute("src", dice1)
         document.querySelector(".img2").setAttribute("src", dice2)
     }
}

