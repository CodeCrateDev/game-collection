// Fetch the current selected game
const PARAMS = new URLSearchParams(window.location.search);
const GAME = PARAMS.get("game");

let gameData = getGameData();

function displayGameData()
{
    document.getElementById("game-title").textContent = gameData.title;
    document.getElementById("game-title").textContent = gameData.desc;
}

function getGameData()
{
    if (GAME)
    {
        document.getElementById("game-title").textContent = "Loading: ${GAME}...";

        const JSON_PATH = "../games/${GAME}.json";

        fetch(JSON_PATH)
        .then(response => {
            if (!response.ok)
            {
                throw new Error("Game not found!");
            }
            return response.json;
        })
        .then(data => {
            gameData = data;
            displayGameData();

            console.log("Loaded game: ${GAME}")
        })
        .catch(err => {
            document.getElementById("game-title").textContent = "Error loading page";
            console.log(err);
        })
    }
    else
    {
        console.log("No game selected!");
    }
}