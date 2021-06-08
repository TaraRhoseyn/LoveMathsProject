//@ts-check

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button"); // this returns items as an array
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") { 
                checkAnswer(); 
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    runGame("addition");
});

function runGame(gameType) { 
    document.getElementById("answer-box").value = ""; // sets value to empty string so each time this function is called the box gets cleared, courtesy to user as it's annoying to take out each time
    document.getElementById("answer-box").focus(); // each time this function is called the cursor will actually be on the answer box so we don't have to keep clicking on it, this is known as 'focus'
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2); //calling another function (see function below)
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "divide") {
        displayDivideQuestion(num1, num2);
    } else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}, aborting!`; //this is for console
    }
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer(); // this means the variable 'calculatedAnswer' will return the answer of the calculateCorrectAnswer function, which will be an array
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect) {
        alert("Hey! You got it right! :D");
        incrementScore();
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {
    
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;
    if (operator === "+") {
        return [operand1 + operand2, "addition"]; // returns array
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"]; // returns array
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, aborting!`;
    }
}

function incrementScore() {
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
 
function displaySubtractQuestion(operand1, operand2) {
    // needs more thought to avoid producing minus numbers
    // the below line works exactly like an 'if' statement but it's in shorthand, makes the larger operand operand1, whichever larger number will always be the first operand, takes away any chance of a minus number.
    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById("operator").textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}

function displayDivideQuestion() {}
