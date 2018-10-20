//Create Initial Variables and Functions

var wins = 0;
var losses = 0;
var guesses = 8;
var letterGuesses = [];
var letterArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var randomLetter = "";
var userInput = "";

function letterCheck(inputtxt){
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.match(letters)) {
        return true;
    }
    else {

        return false;
    }
}

function pickRandomLetter(){
    randomLetter = letterArray[Math.floor(Math.random()*letterArray.length)];
};

function resetGame(){
    pickRandomLetter();
    guesses = 8;
    letterGuesses = []

};

function winGame(){
    wins++;
    //write a message about winning
};

function loseGame(){
    losses++;
    //write a message about losing
};

function checkLose(){
    if (guesses === 0){
        loseGame();
        resetGame();
    };
};

function display(){
    document.getElementById("wins-div").textContent = wins;

    document.getElementById("losses-div").textContent = losses;

    document.getElementById("guesses-div").textContent = guesses;

    document.getElementById("letterGuesses-div").textContent = letterGuesses;
};

//Game Cycle
resetGame();
display();


function playgame(){
    //What happens when the user inputs a keypress?
        //Right = Win Game!
    if (userInput === randomLetter){
        winGame();
        resetGame();
        display();
    } else {
        //Wrong = guesses decrements and input is added to array
        letterGuesses = letterGuesses + userInput;
        guesses--;
        checkLose();
        display();
    };
    
}





document.onkeyup = function (event) {

    var letter = event.key.toLowerCase();
        //check if input is made of letters
        //and is only a single letter
    if (letterCheck(letter) === true && letter.length === 1){

        userInput = letter;
        console.log('userInput: ' + userInput);
        playgame();

    };
};



//Console Variable Test Function
function consoleVariables(){
    console.log("wins: " + wins);
    console.log("losses: " + losses);
    console.log("guesses: " + guesses);
    console.log("letterGuesses: " + letterGuesses);
    console.log("randomLetter: " + randomLetter);
    
};