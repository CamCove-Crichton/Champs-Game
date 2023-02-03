gameLevels();

// declared variables required for use in functions
let currentLevel;
let hiddenNumber;
let hintNum;

// disabled the player input until a level is selected
document.getElementById("player-number").disabled = true;

// Check if the DOM content is loaded
// Idea from Love Maths project
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

    runGame(currentLevel);

});


// function name, idea & code from Love Maths project
/**
 * The main function to generate a number for the computer once the player inputs their number
 */
function runGame(gameType) {
    console.log("game type", gameType);

    document.getElementById("player-number").value = "";
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

        hintNum = num2;

        document.getElementById("computer-number").onmouseover = function popUp() {
            let popup = document.getElementById("hint-popup");
            popup.classList.toggle("show");
            popup.innerText = `I am thinking between ${hintNum - 1} & ${hintNum +2}`;
        }

    } else if (gameType === "level-two") {

        levelQuestion(num3, num4);

        hintNum = num4;

        document.getElementById("computer-number").onmouseover = function popUp() {
            let popup = document.getElementById("hint-popup");
            popup.classList.toggle("show");
            popup.innerText = `I am thinking between ${hintNum - 1} & ${hintNum +2}`;
        }

    } else if (gameType === "level-three") {

        levelQuestion(num5, num6);

        hintNum = num6;

        document.getElementById("computer-number").onmouseover = function popUp() {
            let popup = document.getElementById("hint-popup");
            popup.classList.toggle("show");
            popup.innerText = `I am thinking between ${hintNum - 1} & ${hintNum +2}`;
        }

    } else {

        selectLevelMessage();

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
        // alert("Well done, you got it right :D");
        answerMessage();
        
    } else {
        // alert(`Sorry, that is incorrect, your total adds up to ${calculatedAnswer[0]}, try again`);
        wrongAnswerMessage();
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
 * A function to determine the current level of the game
 */
function gameLevels() {

    let levels = document.getElementsByClassName("levels");

    for (level of levels) {
        level.addEventListener('click', function () {
            if (this.getAttribute("data-entry") === "level-one") {

                currentLevel = "level-one";

                document.getElementById("level1").style.backgroundColor = "black";
                document.getElementById("level1").style.color = "#209CEE";

                document.getElementById("level2").style.backgroundColor = "#D3D3D3";
                document.getElementById("level2").style.color = "grey";

                document.getElementById("level3").style.backgroundColor = "#D3D3D3";
                document.getElementById("level3").style.color = "grey";

                document.getElementById("level1").disabled = true;
                document.getElementById("level2").disabled = true;
                document.getElementById("level3").disabled = true;

                document.getElementById("player-number").disabled = false;
                document.getElementById("submit").disabled = false;

                document.addEventListener('keydown', function (event) {
                    if (event.key === "Enter") {

                        document.getElementById("level1").disabled = true;
                        document.getElementById("level2").disabled = true;
                        document.getElementById("level3").disabled = true;

                    }
                })

            } else if (this.getAttribute("data-entry") === "level-two") {

                currentLevel = "level-two";

                document.getElementById("level2").style.backgroundColor = "black";
                document.getElementById("level2").style.color = "#209CEE";

                document.getElementById("level1").style.backgroundColor = "#D3D3D3";
                document.getElementById("level1").style.color = "grey";

                document.getElementById("level3").style.backgroundColor = "#D3D3D3";
                document.getElementById("level3").style.color = "grey";

                document.getElementById("level1").disabled = true;
                document.getElementById("level2").disabled = true;
                document.getElementById("level3").disabled = true;

                document.getElementById("player-number").disabled = false;
                document.getElementById("submit").disabled = false;

                document.addEventListener('keydown', function (event) {
                    if (event.key === "Enter") {

                        document.getElementById("level1").disabled = true;
                        document.getElementById("level2").disabled = true;
                        document.getElementById("level3").disabled = true;

                    }
                })

            } else if (this.getAttribute("data-entry") === "level-three") {

                currentLevel = "level-three";

                document.getElementById("level3").style.backgroundColor = "black";
                document.getElementById("level3").style.color = "#209CEE";

                document.getElementById("level1").style.backgroundColor = "#D3D3D3";
                document.getElementById("level1").style.color = "grey";

                document.getElementById("level2").style.backgroundColor = "#D3D3D3";
                document.getElementById("level2").style.color = "grey";

                document.getElementById("level1").disabled = true;
                document.getElementById("level2").disabled = true;
                document.getElementById("level3").disabled = true;

                document.getElementById("player-number").disabled = false;
                document.getElementById("submit").disabled = false;

                document.addEventListener('keydown', function (event) {
                    if (event.key === "Enter") {
            
                        document.getElementById("level1").disabled = true;
                        document.getElementById("level2").disabled = true;
                        document.getElementById("level3").disabled = true;
                        
                    }
                })

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

        // alert("Congratulations! You have won the game :D Let's play again");
        winnerMessage();

        // document.getElementById("level1").style.backgroundColor = "#209CEE";
        // document.getElementById("level1").style.color = "black";

        // document.getElementById("level2").style.backgroundColor = "#209CEE";
        // document.getElementById("level2").style.color = "black";

        // document.getElementById("level3").style.backgroundColor = "#209CEE";
        // document.getElementById("level3").style.color = "black";

    } else if (document.getElementById("computer-score").innerHTML === "10") {

        alert("Sorry you lost :( but don't be sad, lets play again!");

        gameReset();

        // selectLevelMessage();

        document.getElementById("level1").style.backgroundColor = "#209CEE";
        document.getElementById("level1").style.color = "black";

        document.getElementById("level2").style.backgroundColor = "#209CEE";
        document.getElementById("level2").style.color = "black";

        document.getElementById("level3").style.backgroundColor = "#209CEE";
        document.getElementById("level3").style.color = "black";

        document.getElementById("player-number").disabled = true;

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

    selectLevelMessage();

    // currentLevel = "Reset";

    runGame(currentLevel);

}

/**
 * A function to display a message to the player to select a level to start the game
 */
function selectLevelMessage() {

    document.getElementById("num-target").innerHTML = "0";

    let body = document.body;

    let newDiv = document.createElement("div");
    newDiv.id = "level-select-div";

    newDiv.innerHTML = `
        <h2 id="level-select">Please select a level to start the game</h2>
        <button id="ok">OK</button>
        `;

    body.appendChild(newDiv);

    document.getElementById("level1").disabled = true;
    document.getElementById("level2").disabled = true;
    document.getElementById("level3").disabled = true;
    document.getElementById("submit").disabled = true;
    document.getElementById("player-number").disabled = true;

    document.getElementById("ok").onclick = function () {

        newDiv.remove();

        document.getElementById("level1").disabled = false;
        document.getElementById("level2").disabled = false;
        document.getElementById("level3").disabled = false;

    }

    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {

            newDiv.remove();

            document.getElementById("level1").disabled = false;
            document.getElementById("level2").disabled = false;
            document.getElementById("level3").disabled = false;

        }
    })

}

/**
 * A function to display a message when the player gets an answer correct
 */
function answerMessage() {

    let body = document.body;

    let newDivCorrectAnswer = document.createElement("div");
    newDivCorrectAnswer.id = "correct-answer-div";

    newDivCorrectAnswer.innerHTML = `
        <h2 id="correct-message">Well done! You got it right <i class="fa-solid fa-face-laugh-beam"></i></h2>
        <button id="ok1">OK</button>
        `;

    body.appendChild(newDivCorrectAnswer);

    document.getElementById("level1").disabled = true;
    document.getElementById("level2").disabled = true;
    document.getElementById("level3").disabled = true;
    document.getElementById("submit").disabled = true;
    document.getElementById("player-number").disabled = true;

    document.getElementById("ok1").onclick = function () {

        newDivCorrectAnswer.remove();

        document.getElementById("submit").disabled = false;
        document.getElementById("player-number").disabled = false;
        document.getElementById("player-number").focus();

    }

    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {

            newDivCorrectAnswer.remove();

            document.getElementById("submit").disabled = false;
            document.getElementById("player-number").disabled = false;
            document.getElementById("player-number").focus();

        }
    })

    if (document.getElementById("player-score").innerHTML === "10") {

        newDivCorrectAnswer.remove();

    }

    playerScore();

}

/**
 * A function to display a message when the player gets the answer wrong
 */
function wrongAnswerMessage() {

    let body = document.body;

    let newDivWrongAnswer = document.createElement("div");
    newDivWrongAnswer.id = "wrong-answer-div";

    newDivWrongAnswer.innerHTML = `
        <h2 id="wrong-message">Sorry, that is incorrect, try again <i class="fa-solid fa-face-dizzy"></i></h2>
        <button id="ok2">OK</button>
        `;

    body.appendChild(newDivWrongAnswer);

    document.getElementById("level1").disabled = true;
    document.getElementById("level2").disabled = true;
    document.getElementById("level3").disabled = true;
    document.getElementById("submit").disabled = true;
    document.getElementById("player-number").disabled = true;

    document.getElementById("ok2").onclick = function () {

        newDivWrongAnswer.remove();

        document.getElementById("submit").disabled = false;
        document.getElementById("player-number").disabled = false;
        document.getElementById("player-number").focus();

    }

    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {

            newDivWrongAnswer.remove();

            document.getElementById("submit").disabled = false;
            document.getElementById("player-number").disabled = false;
            document.getElementById("player-number").focus();

        }
    })

}

/**
 * A function to display a message when the player wins the game
 */
function winnerMessage() {

    document.getElementById("level1").disabled = true;
    document.getElementById("level2").disabled = true;
    document.getElementById("level3").disabled = true;
    document.getElementById("submit").disabled = true;
    document.getElementById("player-number").disabled = true;

    let body = document.body;

    let newDivWinnerAnswer = document.createElement("div");
    newDivWinnerAnswer.id = "winner-answer-div";

    newDivWinnerAnswer.innerHTML = `
        <h2 id="winner-message"><i class="fa-solid fa-crown"></i> Congratulations! <i class="fa-solid fa-crown"></i> You WON!! </h2>
        <button id="ok3">OK</button>
        `;

    body.appendChild(newDivWinnerAnswer);

    document.getElementById("ok3").onclick = function () {

        newDivWinnerAnswer.remove();

        gameReset();

    }

    document.addEventListener('keydown', function (event) {
        if (event.key === "Enter") {

            newDivWinnerAnswer.remove();

            gameReset();

        }
    })

}