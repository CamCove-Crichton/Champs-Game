// Check if the DOM content is loaded
// Idea from Love Maths project

document.addEventListener("DOMContentLoaded", function () {
    // code from Code Institute - Love Maths Project
    let buttons = document.getElementsByTagName("button");
    
    // for loop code from Code Institute - Love Maths Project
    for (button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-entry") === "submit") {
                console.log("DOM Content loaded");
                console.log(calculateAnswer());
                setTimeout(checkAnswer, 1000);
            } else {
                runGame(gameType);
            }
        })
    }
})


// function name and idea from Love Maths project
/**
 * The main function to generate a number for the computer once the player inputs their number
 */
function runGame() {

    targetNumber();
    document.getElementById("player-number").value = " ";
    document.getElementById("player-number").focus();
    document.getElementById("computer-number").value = "?";

    // below two lines of code need to go into each levels function code
    let numComputer = document.getElementById("computer-number");
    numComputer.innerText = parseInt(Math.floor(Math.random() * 10) + 1);
}



// function name and idea from Love Maths project
/**
 * A function to check the sum of the users number and the generated number
 * are equal to the target number
 */
function checkAnswer() {
    let randomTarget = targetNumber();
    let calculatedAnswer = calculateAnswer();

    if (randomTarget !== calculatedAnswer) {
        alert(`Sorry, that is incorrect, your total adds up to ${calculatedAnswer}, try again`);
    } else {
        alert("Well done, you got it right :D");
    }
}


// function name, idea and code from Love Maths project
/**
 * A function to calculate the sum of the users entry and the generated number
 */
function calculateAnswer(operand1, operand2) {
    operand1 = parseInt(document.getElementById("player-number").value);
    operand2 = parseInt(document.getElementById("computer-number").innerText);


    return [operand1 + operand2];
}


// function name and idea from Love Maths project
// function playerScore()


// function name and idea from Love Maths project
// function computerScore()


// function name and idea from Love Maths project

/**
 * A function to generate the target number the user has to aim to meet
 */
function targetNumber() {
    let numTarget = document.getElementById("num-target");
    numTarget.innerText = parseInt(Math.floor(Math.random() * 10) + 1);
}


// function name and idea from Love Maths project
// function gameOver()