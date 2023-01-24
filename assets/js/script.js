// Check if the DOM content is loaded



document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("submit");

    button.addEventListener("click", function() {
        if (this.getAttribute("data-entry") === "submit") {
            alert("DOM content loaded");
            console.log("DOM Content loaded");
        }
    })
})


// function name and idea from Love Maths project
// function runGame()


// function name and idea from Love Maths project
// function checkAnswer()


// function name and idea from Love Maths project
// function calculateAnswer()


// function name and idea from Love Maths project
// function playerScore()


// function name and idea from Love Maths project
// function computerScore()


// function name and idea from Love Maths project
// function targetNumber()


// function name and idea from Love Maths project
// function gameOver()
