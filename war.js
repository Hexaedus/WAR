let boardP1 = document.getElementById("gameBoardP1");
let boardP2 = document.getElementById("gameBoardP2");
let warResult = document.getElementById("warResult")

let p1Deck = [];
let p2Deck = [];

let gameStarted = false;
let roundStarted = false;
let warStarted = false;

function generateDeck(playerDeck){
    for (let i = 0; i < 26; i++)
    {
        playerDeck[i] = returnRandomValue();
        // issue, this code does randomly generate numbers but it does...
        // ... not check against itself to make sure there are no repeats.
    }
}

function returnRandomValue(){
    return Math.floor(Math.random() * 5) + 1; // 51 * 1 = 51 + 1 = 52
}

function startGame()
{
    if (!gameStarted){
        generateDeck(p1Deck);
        generateDeck(p2Deck);
        console.log("p1; " + p1Deck);
        console.log("p2; " + p2Deck);
        pointP1.value = 0;
        pointP2.value = 0;
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

    roundStarted = true;

    if (boardP1.value > boardP2.value) {
        outcome.value = String("Player 1 Wins");
        p1Deck.push(p2Deck[p2DeckIndex]);
        p2Deck.splice(p2DeckIndex, 1);
        console.log(p1Deck)
        console.log(p2Deck)
    } else if (boardP1.value < boardP2.value) {
        outcome.value = String("Player 2 Wins");
        console.log(p1Deck)
        console.log(p2Deck)
        
    }
    else {
        outcome.value = String("WARRR!")
        warStart();
    }

    pointSystem();
    endState(p1Deck.length);
}

function warStart() {
    //initialise in startRound
    // 3 cards instead of 1
    // (do later) 3 hidden cards, click on one, highest wins.
    //splice/push the losers cards to winners deck
    roundStarted = false;
    warStarted = true;
    if (warStarted = true, boardP1.value > boardP2.value) {
        warStarted = true;
        warResult.value = "player 1 wins the war"
        p1Deck.push(p2Deck[p2DeckIndex]);
        p2Deck.splice(p2DeckIndex, 3);
        console.log(p1Deck);
        console.log(p2Deck);
        warStarted = false;
        roundStarted = true;
        startRound();
    } else if (warStarted = true, boardP1.value < boardP2.value) {
        warStarted = true;
        warResult.value = "player 2 wins the war"
        p2Deck.push(p1Deck[p1DeckIndex]);
        p1Deck.splice(p1DeckIndex, 3);
        console.log(p1Deck);
        console.log(p2Deck);
        warStarted = false;
        roundStarted = true;
        startRound();
    }
    // else {
    //     outcome.value = "restart the war"
    //     warStarted = true;
    //     warStart()
    // }
    warStarted = false;
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
    gameStarted = true;
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