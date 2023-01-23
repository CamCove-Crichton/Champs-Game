// Check if the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-entry") === "submit") {
                alert("Content Loaded");
            }
        })
    }
})

// function name and idea from Love Maths project
function runGame()


// function name and idea from Love Maths project
function checkAnswer()


// function name and idea from Love Maths project
function calculateAnswer()


// function name and idea from Love Maths project
function playerScore()


// function name and idea from Love Maths project
function computerScore()


// function name and idea from Love Maths project
function targetNumber()


// function name and idea from Love Maths project
function gameOver()
