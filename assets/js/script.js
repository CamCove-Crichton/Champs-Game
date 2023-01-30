// Check if the DOM content is loaded
// Idea from Love Maths project
gameLevels();
let currentLevel = 'level-one';
let hiddenNumber;

document.addEventListener("DOMContentLoaded", function () {
    // code from Code Institute - Love Maths Project
    let buttons = document.getElementsByTagName("button");

    // for loop code from Code Institute - Love Maths Project
    for (button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-entry") === "submit") {
                document.getElementById("computer-number").innerHTML = hiddenNumber;
                console.log("DOM Content loaded");
                console.log(calculateAnswer()[0]);
                setTimeout(checkAnswer, 1000);
            } else {
                let gameType = this.getAttribute("data-entry");
                runGame(gameType);
            }
        });
    }

    // Code from the Code Institute - Love Maths project
    document.getElementById("player-number").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            document.getElementById("computer-number").innerHTML = hiddenNumber;
            setTimeout(checkAnswer, 1000);
        }
    });

    runGame("level-one");

});


// function name, idea & code from Love Maths project
/**
 * The main function to generate a number for the computer once the player inputs their number
 */
function runGame(gameType) {
    console.log("game type", gameType);

    document.getElementById("player-number").value = " ";
    document.getElementById("player-number").focus();
    document.getElementById("computer-number").innerHTML = "?";


    // Generates numbers for the different levels
    // level 1 numbers
    let num1 = parseInt(Math.floor(Math.random() * 5) + 6);
    let num2 = parseInt(Math.floor(Math.random() * 5) + 1);

    // level 2 numbers
    let num3 = parseInt(Math.floor(Math.random() * 10) + 11);
    let num4 = parseInt(Math.floor(Math.random() * 10) + 1);

    // level 3 numbers
    let num5 = parseInt(Math.floor(Math.random() * 15) + 16);
    let num6 = parseInt(Math.floor(Math.random() * 15) + 1);

    if (gameType === "level-one") {
        levelQuestion(num1, num2);
    } else if (gameType === "level-two") {
        levelQuestion(num3, num4);
    } else if (gameType === "level-three") {
        levelQuestion(num5, num6);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}



// function name, idea & code from Love Maths project
/**
 * A function to check the sum of the users number and the generated number
 * are equal to the target number
 */
function checkAnswer() {
    let goalTarget = parseInt(document.getElementById("num-target").innerHTML);
    let calculatedAnswer = calculateAnswer();
    let isCorrect = goalTarget === calculatedAnswer[0];

    if (isCorrect) {
        alert("Well done, you got it right :D");
        playerScore();
    } else {
        alert(`Sorry, that is incorrect, your total adds up to ${calculatedAnswer[0]}, try again`);
        computerScore();
    }

    gameOver();
}


// function name, idea and code from Love Maths project
/**
 * A function to calculate the sum of the users entry and the generated number
 */
function calculateAnswer(operand1, operand2) {
    operand1 = parseInt(document.getElementById("player-number").value);
    operand2 = hiddenNumber;

    return [operand1 + operand2];

}


// function name, idea & code from Love Maths project
/**
 * A function to increment the players score when they get the correct answer
 */
function playerScore() {

    let previousScore = parseInt(document.getElementById("player-score").innerHTML);
    document.getElementById("player-score").innerHTML = ++previousScore;

}


// function name, idea & code from Love Maths project
/**
 * A function to increment the computer score when the player gets the incorrect total
 */
function computerScore() {

    let wrongScore = parseInt(document.getElementById("computer-score").innerHTML);
    document.getElementById("computer-score").innerHTML = ++wrongScore;

}

// Code from the Code Institute - Love Maths project
/**
 * A function to display the question as a target number from 1 to 10
 */
function levelQuestion(numTarget, numComputer) {

    document.getElementById("num-target").textContent = numTarget;
    hiddenNumber = numComputer;

}

/**
 * A function to determin the current level of the game
 */
function gameLevels() {

    let levels = document.getElementsByClassName("levels");

    for (level of levels) {
        level.addEventListener('click', function () {
            if (this.getAttribute("data-entry").innerText === "level-one") {
                currentLevel = "level-one";
            } else if (this.getAttribute("data-entry") === "level-two") {
                currentLevel = "level-two";
            } else if (this.getAttribute("data-entry") === "level-three") {
                currentLevel = "level-three";
            }
        })
    }
}

// function name and idea from Love Maths project
/**
 * A function to check the scores
 */
function gameOver() {

    if (document.getElementById("player-score").innerHTML === "10") {
        alert("Congratulations! You have won the game :D Let's play again");
        gameReset();
    } else if (document.getElementById("computer-score").innerHTML === "10") {
        alert("Sorry you lost :( but don't be sad, lets play again!");
        gameReset();
    } else {
        runGame(currentLevel);
    }

}

/**
 * A function to reset the scores when the game is over show the game has started again
 */
function gameReset() {

    document.getElementById("player-score").innerHTML = "0";
    document.getElementById("computer-score").innerHTML = "0";

    runGame(currentLevel);

}