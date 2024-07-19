// let displayGames = document.querySelector('.display-games');
// let games = 8;

// for (let i = 0; i < games; i++) {
//     let game = "./images/image" + i + 1 + ".jpg";
//     let gameDiv = document.createElement('div');
//     gameDiv.classList.add('game');
//     gameDiv.innerHTML = `
//         <img src="${game}" alt="${game.title}">

        
    

//     `;
//     displayGames.appendChild(gameDiv);
// }

// let loginButton = document.querySelector('.login-button');
// document.querySelector('.login-button').addEventListener('click', function() {
//     window.location = '/login';
// });

// document.querySelector("#subBtn").addEventListener("click", function () {
//     //get the value from the input

//     //make a fetch request to the back end for the games that match the search "/api/games/search"

//     //get back the games and populate on page

//     //Loop over the data and create a "game card" for each result from the search. You can either use the current game section or add an area for them to be displayed in
// })

document.addEventListener("DOMContentLoaded", () => {
  // Display default games on page load
  const displayGames = document.querySelector(".display-games");

  for (let i = 0; i < GameData.length; i++) {
    let game = `./images/image${i + 1}.jpg`; // Corrected image URL generation
    let gameDiv = document.createElement("div");
    gameDiv.classList.add("game");
    gameDiv.innerHTML = `
            <img src="${game}" alt="Game ${i + 1}">
        `;
    displayGames.appendChild(gameDiv);
  }


  // Handle login button click
  const loginButton = document.querySelector(".login-button");
  loginButton.addEventListener("click", () => {
    window.location = "/login";
  });

  // Handle search button click
  document.querySelector("#subBtn").addEventListener("click", async () => {
    const titles = document.querySelector("#search").value; // Get the value from the input
    // const genreSearched = document.querySelector("").value;
    // const ratingsSearched = document.querySelector("").value;
    // const platformsSearched = document.querySelector("").value;
    // const decadesSearched = document.querySelector("").value;
    try {
      // Make a fetch request to the backend for games that match the search
      const response = await fetch(
        `/api/games/search?titles=${encodeURIComponent(
          titles
        )}&genre=${encodeURIComponent(
          genreSearched
        )}&rating=${encodeURIComponent(ratingsSearched)}
        &platforms=${encodeURIComponent(platformsSearched)}
        &decade=${encodeURIComponent(decadesSearched)}`
      );
      const games = await response.json(); // Get back the games and parse the JSON response

      // Clear previous results if needed
      displayGames.innerHTML = "";

      // Loop over the data and create a "game card" for each result from the search
      games.forEach((game) => {
        let gameDiv = document.createElement("div");
        gameDiv.classList.add("game");
        gameDiv.innerHTML = `
                    <img src="${game.imageUrl}" alt="${game.title}">
                    <h3>${game.title}</h3>
                    <p>${game.description}</p>
                `;
        displayGames.appendChild(gameDiv);
      });
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  });
});
