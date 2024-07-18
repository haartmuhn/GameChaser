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

