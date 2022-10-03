function game(player_1, player_2) {
    var result; 
    if (player_1 === player_2){
        //Caso Empate Primera condición a Evaluar
        result = "Draw -> " + player_1 + " empata " + player_2;
    } else if (player_1 === "Piedra" && player_2 === "Tijeras"){
        result = "Player 1 wins -> "+ player_1 + " gana a " + player_2;
    } else if (player_1 === "Piedra" && player_2 === "Papel"){
        result = "Player 2 wins -> " + player_2 + " gana a " + player_1;
    } else if (player_1 === "Papel" && player_2 === "Piedra"){
        result = "Player 1 wins -> " + player_1 + " gana a " + player_2;
    } else if (player_1 === "Papel" && player_2 === "Tijeras"){
        result = "Player 2 wins -> " + player_2 + " gana a " + player_1;
    } else if (player_1 === "Tijeras" && player_2 === "Papel"){
        result = "Player 1 wins -> " + player_1 + " gana a " + player_2;
    } else if (player_1 === "Tijeras" && player_2 === "Piedra"){
        result = "Player 2 wins -> " + player_2 + " gana a " + player_1;
    }
    console.log(result);

    // Una version mejor, podría se generar un if que valide todas
    // las opciones ganadoras.
}

game("Piedra","Piedra")
game("Piedra","Papel")
game("Piedra","Tijeras")

game("Papel","Piedra")
game("Papel","Papel")
game("Papel","Tijeras")

game("Tijeras","Piedra")
game("Tijeras","Papel")
game("Tijeras","Tijeras")