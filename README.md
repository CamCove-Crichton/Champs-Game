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

### Finished Game Screen Grabs

## Testing

| Test | Expected Result | Pass/Fail |

### Bugs

### Validator Testing

### Unfixed Bugs

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