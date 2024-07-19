let displayGames = document.querySelector('.display-games');
let games = 8;

for (let i = 0; i < games; i++) {
    let game = "./images/image" + i + 1 + ".jpg";
    let gameDiv = document.createElement('div');
    gameDiv.classList.add('game');
    gameDiv.innerHTML = `
        <img src="${game}" alt="${game.title}">
        
        
    `;
    displayGames.appendChild(gameDiv);
}

let loginButton = document.querySelector('.login-button');
document.querySelector('.login-button').addEventListener('click', function() {
    window.location = '/login';
});

document.querySelector("#subBtn").addEventListener("click", function () {
    //get the value from the input

    //make a fetch request to the back end for the games that match the search "/api/games/search"

    //get back the games and populate on page


    //Loop over the data and create a "game card" for each result from the search. You can either use the current game section or add an area for them to be displayed in
})