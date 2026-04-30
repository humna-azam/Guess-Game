let computerNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    // Input se value lena
    let guessInput = document.getElementById("userGuess");
    let userGuess = Number(guessInput.value);
    let resultDisplay = document.getElementById("resultBox");

    // Check if input is empty
    if (guessInput.value === "") {
        resultDisplay.innerHTML = "Please enter a number!";
        resultDisplay.style.color = "orange";
        return;
    }

    // Main Logic
    if (userGuess === computerNumber) {
        resultDisplay.innerHTML = "🏆 Bingo! Correct Answer.";
        resultDisplay.style.color = "green";
        
        // Game reset after 3 seconds
        setTimeout(() => {
            computerNumber = Math.floor(Math.random() * 10) + 1;
            guessInput.value = "";
            resultDisplay.innerHTML = "Game Reset! Try a new number.";
            resultDisplay.style.color = "blue";
        }, 3000);

    } else if (userGuess + 1 === computerNumber || userGuess - 1 === computerNumber) {
        resultDisplay.innerHTML = "😲 Close enough to the correct answer!";
        resultDisplay.style.color = "#d35400";
    } else {
        resultDisplay.innerHTML = "❌ It is not the right number. Try again!";
        resultDisplay.style.color = "red";
    }
}