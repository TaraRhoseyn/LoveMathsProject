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
                checkAnswer(); // calling the checkAnswer function.
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

function checkAnswer() {
     
    // checks the answer against the first element in the returned calculateCorrectAnswer array (found in if statement of that function)
    // puttting 'value' in line below bcos it's an input element
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer(); // this means the variable 'calculatedAnswer' will return the answer of the calculateCorrectAnswer function, which will be an array
    // the variable below is written in short hand. the '=' is just the JS operator for assigning value to a variable, whereas the '===' checks whether two things either side of it are equal. Shorthand for comparison. [0] means the first item in the array (the actual number, not the gametype)
    // if userAnswer is equal to calculatedAnswer's first array isCorrect will return 'true'
    let isCorrect = userAnswer === calculatedAnswer[0];
    // below is shorthand for saying if isCorrect is TRUE run this code
    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    // this returns another game of the same gameType (basically resets it)
    runGame(calculatedAnswer[1]);

}

// Try and avoid creating global variables, try to write your variables within functions etc, because often our script isn't the only one being run on a webpage, it can interfer with other scripts.

function calculateCorrectAnswer() {
    

    // Gets the operands (the numbers) and the operator (plus, minus etc) directly from the DOM
    // parseInt below turns strings into integers (whole numbers). By default when JS gets data from the DOM it returns it as a string, but we need numbers.
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    // We're determining which calculation to do based on which operator is used, e.g. if + operator is used = addition sum will take place

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, aborting!`;
    }
}

function incrementScore() {

    // gets the current score from the DOM and increments it 
    // incrementScore() is called within checkAnswer()

    let oldScore = parseInt(document.getElementById("score").innerText);
    // this writes the score back to the DOM
    document.getElementById("score").innerText = ++oldScore; // can also use 'oldScore + 1'

}

function incrementWrongAnswer() {

    // gets the current tally of incorrect answers from the DOM and increments it
    // incrementWrongAnswer() is called within checkAnswer()

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore; 
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}
 
function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}

function displayDivideQuestion() {}
