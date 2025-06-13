let boardP1 = document.getElementById("gameBoardP1");
let boardP2 = document.getElementById("gameBoardP2");
let player1 = document.getElementById("PlayButton");
let player2 = document.getElementById("PlayButton2");

function startRound() {
    player1 = Math.floor(Math.random() * 53) + 1;
        boardP1.value = player1;
    player2 = Math.floor(Math.random() * 53) + 1;
        boardP2.value = player2;
    if (boardP1.value > boardP2.value) {
        outcome.value = String("Player 1 Wins");
    } else if (boardP1.value == boardP2.value) {
        outcome.value = String("WARRR!")
    }
    else {
        outcome.value = String("Player 2 Wins");
    }
pointSystem();
}

function pointSystem() {
    const outcome = document.getElementById("outcome");
    let pointP1 = document.getElementById("pointP1");
    let pointP2 = document.getElementById("pointP2");
    const win = 1;

 
    if (boardP1.value > boardP2.value) {
        pointP1.value = Number(pointP1.value) + win;
    } else if (outcome.value === String("WARRR!")) {
        pointP1.value == pointP1.value;
        pointP2.value == pointP2.value;
    }
    else {  pointP2.value = Number(pointP2.value) + win;
    }
}