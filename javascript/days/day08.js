

// Initialize DOM elements
const input = document.querySelector("input"),
    guess = document.querySelector(".guess"),
    checkButton = document.querySelector("button"),
    remainChances = document.querySelector(".chances");
    presentCode = [1,60,2];

let iteratePresentCode = 0;
let gameWon;
// Set initial focus on the input field
input.focus();

// Function to reset the game
const resetGame = () => {
    if(gameWon){
        iteratePresentCode < 2 ? iteratePresentCode++ : iteratePresentCode = 0;
    }
    randomNum = presentCode[iteratePresentCode]; // Generate a new random number
    console.log(randomNum)
    chance = 10; // Reset chances
    input.disabled = false; // Enable input field
    remainChances.textContent = chance; // Update chances display
    guess.textContent = ""; // Clear guess display
    guess.style.color = "#333"; // Reset guess text color
    input.value = ""; // Clear input field
    checkButton.textContent = "Check"; // Reset button text
};

// Generate a random number between 0 and 99
let randomNum = presentCode[iteratePresentCode];
let chance = 10;

// Add click event listener to the check button
checkButton.addEventListener("click", () => {
    console.log(randomNum)
    if (input.disabled) {
        // If the input is disabled, reset the game
        resetGame();
        return;
    }

    chance--; // Decrease chance by 1 on each click
    let inputValue = input.value; // Get the value from the input field

    if (inputValue == randomNum) { // Correct guess
        gameWon = true;
        [guess.textContent, input.disabled] = ["Jippie das war richtig!.", true];
        [checkButton.textContent, guess.style.color] = ["Nochmal", "#27ae60"];
    } else if (inputValue > randomNum && inputValue < 100) { // Guess is too high
        [guess.textContent, remainChances.textContent] = ["Der Versuch war zu hoch!", chance];
        guess.style.color = "#333";
    } else if (inputValue < randomNum && inputValue > 0) { // Guess is too low
        [guess.textContent, remainChances.textContent] = ["Der Versuch war zu niedrig!", chance];
        guess.style.color = "#333";
    } else { // Invalid input (not in the range 1-99)
        [guess.textContent, remainChances.textContent] = ["Die nummer macht keinen Sinn!", chance];
        guess.style.color = "#e74c3c";
    }

    if (chance == 0) { // No chances left, game over
        gameWon = false;
        [checkButton.textContent, input.disabled, inputValue] = ["Nochmal", true, ""];
        [guess.textContent, guess.style.color] = ["Du hast veloren", "#e74c3c"];
    }
});