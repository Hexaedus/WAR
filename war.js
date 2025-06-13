let boardP1 = document.getElementById("gameBoardP1");
let boardP2 = document.getElementById("gameBoardP2");

let p1Deck = [];
let p2Deck = [];

let gameStarted = false;

function generateDeck(playerDeck){
    for (let i = 0; i < 26; i++)
    {
        playerDeck[i] = returnRandomValue();
    }
}

function startGame()
{
    if (!gameStarted){
        generateDeck(p1Deck);
        generateDeck(p2Deck);
        console.log("p1; " + p1Deck);
        console.log("p2; " + p2Deck);
        gameStarted = true;
    }
}

function returnRandomValue(){
    return Math.floor(Math.random() * 51) + 1;
}

function startRound() {
    startGame();

    boardP1.value = returnRandomValue();
    boardP2.value = returnRandomValue();

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

