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
    };
};

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

// function windowColor(x){
//     var elements;
//     if (x === 8){
//         document.getElementById("game-window").style.backgroundColor = "#E2E1B9";
//     } else if (x === 7){
//         document.getElementById("game-window").style.backgroundColor = "#D3D2C7";
//     } else if (x === 6){
//         document.getElementById("game-window").style.backgroundColor = "#D3C2CE";
//     } else if (x === 5){
//         document.getElementById("game-window").style.backgroundColor = "#E2AFDE";
//     }else if (x === 4){
//         document.getElementById("game-window").style.backgroundColor = "#F991CC";
//     }else if (x === 3){
//         document.getElementById("game-window").style.backgroundColor = "#D3C2CE";
//     }else if (x === 2){
//         document.getElementById("game-window").style.backgroundColor = "#D485B5";
//     }else if (x === 1){
//         document.getElementById("game-window").style.backgroundColor = "#A57B99";
//     }

// }

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
        letterGuesses.push(userInput);
        guesses--;
        checkLose();
        display();
        
        // windowColor(guesses);
        
    };
    
}



document.onkeyup = function (event) {

    var letter = event.key.toLowerCase();
    
    //don't count letter if it has been guessed
    if (letterGuesses.includes(letter)){
        userInput = letter;
        console.log('userInput: ' + userInput);
    } 
    //check if input is made of letters
        //and is only a single letter
    else if(letterCheck(letter) === true && letter.length === 1){

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