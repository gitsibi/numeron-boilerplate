// Iteration 5: Store the player score and display it on the game over screen
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the player's score from local storage
    var score = localStorage.getItem("score");

    // Display the score on the game over screen
    var scoreBoard = document.getElementById("score-board");
    scoreBoard.textContent = score || 0; // Display 0 if score is null or undefined
});

document.getElementById("play-again-button").addEventListener("click", function() {
    // Redirect to the game page when the play again button is clicked
    window.location.href = "game.html";
});
