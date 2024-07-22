// console.log("Linked!!!");

document.addEventListener("DOMContentLoaded", () => {
  // Display default games on page load
  const displayGames = document.querySelector(".display-games");
  if (displayGames) {
    fetch("/api/search")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((titleData) => {
        for (let i = 0; i < titleData.length; i++) {
          let game = titleData[i].imageUrl || `./images/image${i + 1}.jpg`;
          let gameDiv = document.createElement("div");
          gameDiv.classList.add("game");
          gameDiv.innerHTML = `
            <img src="${game}" alt="${titleData[i].title}">
          `;
          displayGames.appendChild(gameDiv);
        }
      })
      .catch((error) => console.error("Error fetching games:", error));
  }
  // Handle profile button click
  const buttonElement = document.getElementById("profile-button");
  if (buttonElement) {
    buttonElement.addEventListener("click", () => {
      window.location.href = "http://localhost:3001/user";
    });

  }
  // Handle menu visibility
  const divElement = document.querySelector(".menu");
  const hideButton = document.getElementById("hideButton");
  if (hideButton && divElement) {
    hideButton.addEventListener("click", () => {
      divElement.style.visibility = "hidden";
    });
  }

  // document
  //   .querySelector('#subBtn')
  //   .addEventListener('click');

  // // Handle login button click
  // const loginButton = document.querySelector(".login-button");
  // loginButton.addEventListener("click", () => {
  //   window.location = "/login";
  // });

  // Handle search button click
  document.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const paramOne = document.querySelector("#firstSelect").value; // Get the value from the input
    const paramTwo = document.querySelector("#secondSelect").value;
    try {
      // Make a fetch request to the backend for games that match the search
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          filter:paramOne,
          value: paramTwo

        })
      });

      const games = await response.json();// Get back the games and parse the JSON response

      console.log("++++++++++++++++++++++++++");
      console.log(games);
      // Clear previous results if needed
      displayGames.innerHTML = "";

      // Loop over the data and create a "game card" for each result from the search
      //games.forEach((game) => {
        //let gameDiv = document.createElement("div");
        //gameDiv.classList.add("game");
        //gameDiv.innerHTML = `
                    //<img src="${game.imageUrl}" alt="${game.title}">
                    //<h3>${game.name}</h3>
                    //<p>${game.description}</p>
                //`;
        //displayGames.appendChild(gameDiv);
      //});
      
    } catch (error) {
      console.error("Error fetching games:", error);
    }
  });
});

