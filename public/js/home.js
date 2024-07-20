

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

  // Handle profile button click
  document.addEventListener('DOMContentLoaded', (event) => {
    // Select the button element
    const buttonElement = document.getElementById('profile-button');

    // Add an event listener to the button
    buttonElement.addEventListener('click', () => {
        // Navigate to a new URL
        window.location.href = 'http://localhost:3001/login';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const divElement = document.getElementById('menu');
  const hideButton = document.getElementById('hideButton');

  hideButton.addEventListener('click', () => {
      divElement.style.visibility = 'hidden';
  });
});

  // // Handle login button click
  // const loginButton = document.querySelector(".login-button");
  // loginButton.addEventListener("click", () => {
  //   window.location = "/login";
  // });

  // Handle search button click
  document.querySelector("#subBtn").addEventListener("click", async () => {
    const titles = document.querySelector("#search").value; // Get the value from the input
    const genreSearched = document.querySelector("#genre").value;
    const ratingsSearched = document.querySelector("#rating").value;
    const platformsSearched = document.querySelector("#platform").value;
    const decadesSearched = document.querySelector("#decadeCreated").value;
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
      console.log(games)
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  });
});
