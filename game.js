// Iteration 2: Generate 2 random numbers and display them on the screen
document.addEventListener("DOMContentLoaded", function() {
    // Function to generate a random number
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to update the displayed numbers
    function updateNumbers() {
        var number1 = getRandomNumber(1, 100);
        var number2 = getRandomNumber(1, 100);
        document.getElementById("number1").textContent = number1;
        document.getElementById("number2").textContent = number2;
    }

    // Iteration 3: Make the options button functional
    function handleButtonClick(relation) {
        var number1 = parseInt(document.getElementById("number1").textContent);
        var number2 = parseInt(document.getElementById("number2").textContent);

        switch (relation) {
            case "greater":
                if (number1 > number2) {
                    // Handle correct guess
                    updateNumbers();
                }
                break;
            case "equal":
                if (number1 === number2) {
                    // Handle correct guess
                    updateNumbers();
                }
                break;
            case "lesser":
                if (number1 < number2) {
                    // Handle correct guess
                    updateNumbers();
                }
                break;
            default:
                break;
        }
    }

    // Event listeners for buttons
    document.getElementById("greater-than").addEventListener("click", function() {
        handleButtonClick("greater");
    });

    document.getElementById("equal-to").addEventListener("click", function() {
        handleButtonClick("equal");
    });

    document.getElementById("lesser-than").addEventListener("click", function() {
        handleButtonClick("lesser");
    });

    // Iteration 4: Build a timer for the game
    var timeLeft = 5; // Initial time in seconds
    var timerDisplay = document.getElementById("timer");
    var timerInterval = setInterval(updateTimer, 1000);

    function updateTimer() {
        timerDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval); // Stop the timer
            window.location.href = "gameover.html"; // Redirect to game over page
        }
        timeLeft--;
    }
    var score = 0; // Initialize score

    function updateScore() {
        score += 1; // Increment score for each correct guess
        localStorage.setItem("score", score);
    }

    function handleButtonClick(relation) {
        var number1 = parseInt(document.getElementById("number1").textContent);
        var number2 = parseInt(document.getElementById("number2").textContent);

        switch (relation) {
            case "greater":
                if (number1 > number2) {
                    // Handle correct guess
                    updateScore();
                    updateNumbers();
                }
                break;
            case "equal":
                if (number1 === number2) {
                    // Handle correct guess
                    updateScore();
                    updateNumbers();
                }
                break;
            case "lesser":
                if (number1 < number2) {
                    // Handle correct guess
                    updateScore();
                    updateNumbers();
                }
                break;
            default:
                break;
        }
    }

    // Initial generation of numbers
    updateNumbers();
});
