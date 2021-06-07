//@ts-check
// Each function should have only one main task. This is known as the 'single responsibility principle'. We have to structure first, with small junctions with one main job. 
// Code an event executes is called an event-handler

// Code that will be executed when the page has finished loaded

// Wait for the DOM to finish loading before running the game - otherwise you could be trying to execute on a page/element that doesn't exist yet.
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button"); // this returns items as an array

    // the below code does exactly the same as what i've already learnt as: for (let i = 0; i < buttons.length; i++). It iterates through the above array
    // the below syntax is just a modern version of the for/let syntax in the comment above
    // it will go through each elements in the array, and return each element to be stored in the variable 'button' on each iteration. This is useful so we don't have to use index notation to speak to each element in the array, and it reads cleaner
    for (let button of buttons) {
        // when the button is clicked [below], the code inside the {} will execute
        button.addEventListener("click", function() {
            // below checks if the value of the data-type attribute in 'button' variable items is strictly equal to 'submit'
            if (this.getAttribute("data-type") === "submit") { 
                alert("You clicked Submit")
            } else {
                // below tells us what game type attribute we want to run, e.g. all the other buttons, multiply/subtract etc. We're setting the game type (variable) to the value of that HTML data-type attribute value, e.g. "multiply"
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});

// we need to generate numbers from 1-25 for our game. Let's use the 'random' method from the 'math' object
// by default the 'Math.random' generates a number from 0.0-0.1, so we need to times it by 25 in order to get a number from 1-25. Math.random() * 25. then Math.floor(Math.random() * 25). Then Math.floor(Math.random() * 25) + 1;
// by default the math.random creates decimal numbers, eg 5.888, we need an 'intergar'(whole number)
// Math.floor rounds down to the whole number, meaning the range is 0-24. so we need to add + 1.



// Code to be executed when the user clicks a button

function runGame(gameType) { // we're passing the gameType into the function as an argument
    // we need to generate numbers from 1-25 for our game. Let's use the 'random' method from the 'math' object
    // by default the 'Math.random' generates a number from 0.0-0.1, so we need to times it by 25 in order to get a number from 1-25. Math.random() * 25. then Math.floor(Math.random() * 25). Then Math.floor(Math.random() * 25) + 1;
    // by default the math.random creates decimal numbers, eg 5.888, we need an 'intergar'(whole number)
    // Math.floor rounds down to the whole number, meaning the range is 0-24. so we need to add + 1.

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2); //calling another function (see function below)
    } else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}, aborting!`; //this is for console
    }
}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion(operand1, operand2) {
    
}
 
function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}

function displayDivideQuestion() {}
