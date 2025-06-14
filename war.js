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
    runTests();

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
        outcome.value = "Player 2 Wins The Game!";
        gameStarted = false;
        return "Player 2 wins"

    }
    if (deckLength >= 52){
        outcome.value = "Player 2 Wins The Game!";
        gameStarted = false;
        return "Player 1 wins"
    }

    return "no winner"

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

// Test Harness
function runTests() {
    let passed = 0;// let because it can change
    let failed = 0;
    
    function test(name, fn) {// test name, test function?
        try {
            fn(); // uses the test() below to check, log, and say whether it was passed
            console.log(`✓ ${name}`);
            passed++;
        } catch (error) { // like an else statement???
            console.log(`✗ ${name}: ${error.message}`);
            failed++;
        }
    }
    
    function assertEquals(actual, expected) {// this function runs itself through the function above but is listed lower due to the logic abovee
        if (actual !== expected) {
            throw new Error(`Expected ${expected}, got ${actual}`);
        }
    }
    
    // Your tests here
    test("Player 2 Wins", () => {
        assertEquals(endState(0), "Player 2 wins");
    });

    test("Player 1 Wins", () => {
        assertEquals(endState(52), "Player 1 wins");
    });

    test("No Winner", () => {
        assertEquals(endState(36), "no winner");
    });
    
    console.log(`\nSummary: ${passed} passed, ${failed} failed`);
}