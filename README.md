# Champs

## A numbers guessing game, where the player has to enter a number in combination with a generated number from the computer to reach the same number displayed as the target number

### How to play:
- The player must try to match the target number by entering a number
- The computer will also generate a number once the player has put their number in
- If the sum of the players number and the computers number matches the target number, the player gets a point, if not then the computer gets a point

## Deployment

### Am I Responsive

## Development

### Wireframes


- Started by creating all the directories and files required for the project:-
1. index.html
2. assests directory
3. CSS directory
4. style.css file
5. js directory
6. script.js file
7. Images directory
8. README images directory

- Started working on the index.html file to get the basic html structure in place
- Linked the CSS and js files to the html file and tested the were working
- Continued working on the html structure for the layout of the game
- Created the README.md file and set it up with all sections required at the time and populated the README.md file as much as possible to where the project was at, and then set the goal to continuously update the README.md file as the project developed
- Added html code to the scores div and to the footer in the index.html file
- Added a Submit button to the question area and updated the "How to play" list in the index.html file
- Began styling the game in the style.css file
- Started with basic general styling for the body and then the section and footer elements
- Added in a favicon to display in the tab for the game
- Added in the description and keywords metadata to the head on the index.html file
- Continued styling, but started to get more specific by starting on the elements in the game area
- Added a heading for the target number in the index.html file
- Continued styling, and after running into some issues with positioning, used devtools to get to the bottom of the mysteries, and rectified
To try to increase productivity with styling, devtools were used for the remaining part of the styling process to use as a visual as styling was done, and then from the devtools I would take my code from trial and error and paste into my style.css file
- Continued to fine tune the styling and began working on the media queries for a responsive design, working on it from a small mobile screen to add media queries as the screen size increases
- Moved onto creating the function names I could think of that would be required for the script.js file in order to manipulate the DOM for the game to work
- Changed the number display for the Computer player to a "?" instead of a number as it shall remain hidden until the user player submits their answer
- Created the targetNumber function to generate a number between 1 and 10 for the player to aim to get to
- Created a runGame function to utilise as the main loop for the game
- Created a calculateAnswer function to work out the sum of the users input value and the generated
- Created a checkAnswer function to check the targetNumber and the calculateAnswer are identical
- Decided to create three levels using buttons for the player to decide if they want to change the difficulty in guessing numbers for an answer from 1 to 10 for level 1, to an answer from 1 to 20 for level 2 and an answer from 1 to 30 for level 3
- Styled the most recent additions of the level buttons to the game
- Created a levelOneQuestion function to display the questions for level one and then had to modify the other functions created so far to incorporate the levels
- Created a function for incrementing the players score and then another function for incrementing the computers score
- Added in the code for the levels 2 and 3 into the runGame()
- Added in a function to determine when the Game is over
- Created a function to reset the scores when the Game is over to show the player the game has started again
- Added in a variable to store the generated number value in the hiddenNumber variable
- Updated the levelQuestion() function to assign the value to the hiddenNumber variable
- I then assigned the hiddenNumber variable to the element in the DOM with the id of computer-number so it can display the number for the player to see after they have inout their answer
- Added an event listener so the user can press enter to submit their answer

### Finished Game Screen Grabs

## Testing

| Test | Expected Result | Pass/Fail |

### Bugs
- Issues with positioning in the game area styling section (Used devtools to see what was happening and made progress)
- Issue with the :after element in displaying correctly - still needs more research and use of devtools

### Validator Testing

### Unfixed Bugs
- Would like to finesse styling with the h3 headings in the question area div across all forms of media queries for a better responsive design
- Need to sort the checkAnswer function to work correctly, possibly the two variables are not being seen as number values

## Credits

### Content

### Media

### Code
[Code Institute](https://codeinstitute.net/) - Love Maths Project (Layout ideas and troublshooting)

- index.html file used the idea from the Love Maths project for the question area layout
```
{
    <div>
                <!-- idea from Code Institute Love Maths project -->
                <span>
                    <input data-entry="player" type="number">
                </span>
                <span>
                    <i class="fa-solid fa-plus"></i>
                </span>
                <span data-entry="computer">0</span>
            </div>
}
```

- To display the scores, the code used was from the Love Maths project
```
{
    <div>
            <p class="scores">Players Score: <span id="player-score">0</span></p>
            <p class="scores">Computer Score: <span id="computer-score">0</span></p>
        </div>
}
```

- Idea to use buttons for the levels using the created attribute data-entry from the Code Institute - Love Maths project
```
{
    <div>
            <button id="level1" data-entry="level-one" class="levels">level 1</button>
            <button id="level2" data-entry="level-two" class="levels">level 2</button>
            <button id="level3" data-entry="level-three" class="levels">level 3</button>
        </div>
}
```

- Idea and code for for the hover and active pseudo class for the levels class from the Code Institute - Love Maths project
```
{
    .levels:active,
.levels:hover {
    background-color: black;
    color: whitesmoke;
}
}
```

#### script.js Credits

- Idea to check DOMContentLoaded as well as some function name idea from the Code Institute - Love Maths Project
```
{
    // Check if the DOM content is loaded


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
}
```

- Idea for the DOMContentLoaded event listener from the Code Institute - Love Maths Project
```
{
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
}
```

- The code and idea for the focus and the player input to always have a cusor in and to have no value in, is from the Code Institute - Love Maths project
```
{
    document.getElementById("player-number").value = " ";
    document.getElementById("player-number").focus();
}
```

- The calculateAnswer() code was from the Code Institute - Love Moths project
```
{
    function calculateAnswer(operand1, operand2) {
    operand1 = parseInt(document.getElementById("player-number").value);
    operand2 = parseInt(document.getElementById("computer-number").innerText);
    

    return[operand1 + operand2];
}
}
```

- Code for the levelOneQuestion function from the Code Institute - Love Maths project
```
{
    function levelOneQuestion(numTarget, numComputer) {

    document.getElementById("num-target").textContent = numTarget > numComputer ? numTarget : numComputer;
    document.getElementById("computer-number").textContent = numComputer > numTarget ? numComputer : numTarget;

}
}
```

- Code for the runGame(gameType) function from the Code Institute - Love Maths project
```
{
    function runGame(gameType) {

    // targetNumber();
    document.getElementById("player-number").value = " ";
    document.getElementById("player-number").focus();
    document.getElementById("computer-number").value = "?";


    // Generates numbers for the different levels
    // level 1 numbers
    let num1 = parseInt(Math.floor(Math.random() * 10) + 1);
    let num2 = parseInt(Math.floor(Math.random() * 10) + 1);

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
}
```

- The code for checking the answer is correct is used from the Code Insitute - Love Maths project
```
{
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
}
```

- The function for the player score was from the Code Institute - Love Maths project
```
{
    function playerScore() {

    let previousScore = parseInt(document.getElementById("player-score").innerHTML);
    document.getElementById("player-score").innerHTML = ++previousScore;

}
}
```

- Code for the Computer score is from the Code Institute - Love Maths project
```
{
    function computerScore() {

    let wrongScore = parseInt(document.getElementById("computer-score").innerHTML);
    document.getElementById("computer-score").innerHTML = ++wrongScore;

}
}
```

- Code for the event listener for keydown from the Code Institute - Love Maths project
```
{
    document.getElementById("player-number").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            document.getElementById("computer-number").innerHTML = hiddenNumber;
            setTimeout(checkAnswer, 1000);
        }
    })
}
```

[Google Fonts](https://fonts.google.com/about) - Font styles

```
{
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Laila:wght@300&family=Roboto+Mono&display=swap');
      </style>
}
```

[Font Awesome](https://fontawesome.com/) - Icons

```
{
     <script src="https://kit.fontawesome.com/c1b12b8cf9.js" crossorigin="anonymous"></script>
}
```

[w3schools](https://www.w3schools.com/) - Troubleshooting and Researching

- How to remove arrows from a numbers input
```
{
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
}
```

[Code Institute](https://codeinstitute.net/) - Tutor support

- Helped see how to store the data as a variable to then reassign the variable depending on the button selected for the level
```
{
    function gameLevels() {

    let levels = document.getElementsByClassName("levels");

    for (level of levels) {
        level.addEventListener('click', function() {
            if (this.getAttribute("data-entry").innerText === "level-one") {
                currentLevel = "level-one";
            } else if (this.getAttribute("data-entry") === "level-two") {
                currentLevel = "level-two"
            } else if (this.getAttribute("data-entry") === "level-three") {
                currentLevel = "level-three"
            }
        })
    }
}
}

{
    gameLevels()
currentLevel = 'level-one'
}
```
