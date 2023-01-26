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
                console.log(calculateAnswer()[0]);
                setTimeout(checkAnswer, 1000);
            } else {
                let gameType = this.getAttribute("data-entry");
                runGame(gameType);
            }
        })
    }

    runGame("level-one");

})


// function name, idea & code from Love Maths project
/**
 * The main function to generate a number for the computer once the player inputs their number
 */
function runGame(gameType) {

    // targetNumber();
    document.getElementById("player-number").value = " ";
    document.getElementById("player-number").focus();
    document.getElementById("computer-number").value = "?";


    // Generates numbers for the different levels
    // level 1 numbers
    let num1 = parseInt(Math.floor(Math.random() * 10) + 1);
    let num2 = parseInt(Math.floor(Math.random() * 5) + 1);

    // level 2 numbers
    let num3 = parseInt(Math.floor(Math.random() * 20) + 1);
    let num4 = parseInt(Math.floor(Math.random() * 20) + 1);

    // level 3 numbers
    let num5 = parseInt(Math.floor(Math.random() * 30) + 1);
    let num6 = parseInt(Math.floor(Math.random() * 30) + 1);

    if (gameType === "level-one") {
        levelOneQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

    // generates the computer number
    // let numComputer = document.getElementById("computer-number");
    // numComputer.innerText = parseInt(Math.floor(Math.random() * 10) + 1);
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
    } else {
        alert(`Sorry, that is incorrect, your total adds up to ${calculatedAnswer[0]}, try again`);
    }

    runGame(calculateAnswer[1]);
}


// function name, idea and code from Love Maths project
/**
 * A function to calculate the sum of the users entry and the generated number
 */
function calculateAnswer(operand1, operand2) {
    operand1 = parseInt(document.getElementById("player-number").value);
    operand2 = parseInt(document.getElementById("computer-number").innerText);

    return [operand1 + operand2, runGame];
}


// function name and idea from Love Maths project
// function playerScore()


// function name and idea from Love Maths project
// function computerScore()


// function name and idea from Love Maths project

/**
 * A function to generate the target number the user has to aim to meet
 */
// function targetNumber() {
//     let numTarget = document.getElementById("num-target");
//     numTarget.innerText = parseInt(Math.floor(Math.random() * 10) + 1);
// }

// Code from the Code Institute - Love Maths project
/**
 * A function to display the question as a target number from 1 to 10
 */
function levelOneQuestion(numTarget, numComputer) {

    document.getElementById("num-target").textContent = numTarget;
    document.getElementById("computer-number").textContent = numComputer;

}


// function name and idea from Love Maths project
// function gameOver()