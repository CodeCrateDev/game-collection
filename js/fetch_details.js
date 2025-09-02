const PARAMS = new URLSearchParams(window.location.search);
const GAME_NAME = PARAMS.get("game");

let gameData = null;

if (gameName) {
    const JSON_PATH = 'games/${GAME_NAME}.json';

    fetch(JSON_PATH)
    .then(response => {
        if (!response.ok) {
            throw new Error('Game data not found: ${JSON_PATH}');
        }
        return response.json();
    })
    .then(data => {
        gameData = data;

        document.getElementById("game-title").textContent = gameData.title || GAME_NAME;
        document.getElementById("game-description").textContent = gameData.description || "No description available.";
        document.getElementById("game-author").textContent = gameData.author || "Unknown";
    })
    .catch(err => {
        document.getElementById("game-title").textContent = "Error loading game";
        document.getElementById("game-description").textContent = err.message;
    })
}
else {
    document.getElementById("game-title").textContent = "No game selected"
}