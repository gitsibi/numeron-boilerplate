// Iteration 2: Generate 2 random number and display it on the screen

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

    // Function to handle button
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

});

// Iteration 4: Build a timer for the game

    document.addEventListener("DOMContentLoaded", function() {
        var timeLeft = 5; // Initial time in seconds for Iteration 4
        var timerDisplay = document.getElementById("timer");
        var score = 0; // Initialize score
    
        function updateTimer() {
            timerDisplay.textContent = timeLeft;
            if (timeLeft === 0) {
                // Redirect to the game over page after time runs out
                setTimeout(function() {
                    window.location.href = "gameover.html";
                }, 1000); // 1 second delay
                clearInterval(timerInterval); // Stop the timer
            }
            timeLeft--;
        }
    
        function updateScore() {
            // Increment the score for each correct guess
            score += 2; // For example, add 10 points for each correct guess
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
                    }
                    break;
                case "equal":
                    if (number1 === number2) {
                        // Handle correct guess
                        updateScore();
                    }
                    break;
                case "lesser":
                    if (number1 < number2) {
                        // Handle correct guess
                        updateScore();
                    }
                    break;
                default:
                    break;
            }
        }
    
        document.getElementById("greater-than").addEventListener("click", function() {
            handleButtonClick("greater");
        });
    
        document.getElementById("equal-to").addEventListener("click", function() {
            handleButtonClick("equal");
        });
    
        document.getElementById("lesser-than").addEventListener("click", function() {
            handleButtonClick("lesser");
        });
    
        // Start the timer
        var timerInterval = setInterval(updateTimer, 1000);
    });
    



