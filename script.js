//@ts-check
// Each function should have only one main task. This is known as the 'single responsibility principle'. We have to structure first, with small junctions with one main job. 
// Code an event executes is called an event-handler

// Code that will be executed when the page has finished loaded

// Wait for the DOM to finish loading before running the game - otherwise you could be trying to execute on a page/element that doesn't exist yet.
// Get the button elements and add event listeners to them


document.addEventListener("DOMContentUploaded", function() {
    let buttons = document.getElementsByTagName('button'); // this returns items as an array

    // the below code does exactly the same as what i've already learnt as: for (let i = 0; i < buttons.length; i++). It iterates through the above array
    // the below syntax is just a modern version of the for/let syntax in the comment above
    // it will go through each elements in the array, and return each element to be stored in the variable 'button' on each iteration. This is useful so we don't have to use index notation to speak to each element in the array, and it reads cleaner
    for (let button of buttons) {
        // when the button is clicked [below], the code inside the {} will execute
        button.addEventListener("click", function() {
            // below checks if the value of the data-type attribute in 'button' variable items is strictly equal to 'submit'
            if (this.getAttribute("data-type") === "submit") { 
                alert("You clicked Submit!");
            } else {
                // below tells us what game type attribute we want to run, e.g. all the other buttons, multiply/subtract etc. We're setting the game type (variable) to the value of that HTML data-type attribute value, e.g. "multiply"
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`); // when using ${} remember to use the backticks `` and not quotations ''
            }
        })
    }
})


// Code to be executed when the user clicks a button

function runGame() {}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestion() {}
 
function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}

function displayDivideQuestion() {}
