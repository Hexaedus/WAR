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

function returnRandomValue(){
    return Math.floor(Math.random() * 51) + 1;
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

function returnRandomDeckIndex(deck){//parameter for use within this function only
    let randomIndex = Math.floor(Math.random() * (deck.length - 1));
    return randomIndex//the output of the function
}

function startRound() {  
    startGame();

    let p1DeckIndex = returnRandomDeckIndex(p1Deck);
    let p2DeckIndex = returnRandomDeckIndex(p2Deck);

    boardP1.value = p1Deck[p1DeckIndex];
    boardP2.value = p2Deck[p2DeckIndex];

    if (boardP1.value > boardP2.value) {
        outcome.value = String("Player 1 Wins");
        console.log("p1Deck - " + p1Deck);
        console.log("p2Deck - " + p2Deck);
        p1Deck.push(p2Deck[p2DeckIndex]);
        p2Deck.splice(p2DeckIndex, 1);
        console.log("p1Deck - " + p1Deck);
        console.log("p2Deck - " + p2Deck);
    } else if (boardP1.value == boardP2.value) {
        outcome.value = String("WARRR!")
    }
    else {
        outcome.value = String("Player 2 Wins");
    }

    pointSystem();
    endState(p1Deck.length);
}

function endState(deckLength) {
    if (deckLength <= 0) {
        outcome.value = "Player 2 Wins!";
        gameStarted = false;

    }
    if (deckLength >= 52){
        outcome.value = "Player 1 Wins!";
        gameStarted = false;
    }

    // check deck array length?
    // if either array length is 0/52, end state
    // set gameStarted to false so that the array doesnt reset
}

function pointSystem() {//void return
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

// test

it('createPublicationYearLabel: a range of years', () => {
    assertEqual( true
      
    );
  });