// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.

document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("play-button");

    playButton.addEventListener("click", function() {
        // Show the game page
        window.location.href = "game.html";
    });
});

