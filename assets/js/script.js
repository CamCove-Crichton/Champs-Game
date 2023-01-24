// Check if the DOM content is loaded
// Idea from Love Maths project

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("submit");
    targetNumber();

    button.addEventListener("click", function() {
        if (this.getAttribute("data-entry") === "submit") {
            alert("DOM content loaded");
            console.log("DOM Content loaded");
            calculateAnswer();
        }
    })
})


// function name and idea from Love Maths project
// function runGame()


// function name and idea from Love Maths project
/**
 * A function to check the sum of the users number and the generated number
 * are equal to the target number
 */
// function checkAnswer() {

// }


// function name, idea and code from Love Maths project
/**
 * A function to calculate the sum of the users entry and the generated number
 */
// function calculateAnswer() {
//     let operand1 = parseInt(document.getElementById("player-number").innerText);
//     let operand2 = parseInt(document.getElementById("computer").innerText);
//     let operator = document.getElementById("operator").innerText;

    
// }


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
    numTarget.innerText = parseInt(Math.floor(Math.random() *10) +1);

    console.log(numTarget);
}


// function name and idea from Love Maths project
// function gameOver()
