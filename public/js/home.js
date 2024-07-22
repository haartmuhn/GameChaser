document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const paramOne = document.querySelector("#firstSelect").value;
      const paramTwo = document.querySelector("#secondSelect").value;

      try {
        const response = await fetch("/api/search", {
          // Ensure this matches your backend route
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            filter: paramOne,
            value: paramTwo,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Expected JSON response");
        }

        const data = await response.json();
        console.log("Search results:", data);

        if (data && Array.isArray(data.games)) {
          const displayGames = document.querySelector(".display-games");
          if (displayGames) {
            displayGames.innerHTML = "";

            data.games.forEach((game) => {
              let gameDiv = document.createElement("div");
              gameDiv.classList.add("game");
              gameDiv.innerHTML = `
                <img src="${game.imageUrl || "./images/default.jpg"}" alt="${
                game.name
              }">
                <h3>${game.name}</h3>
                <p>${game.description || "No description available"}</p>
              `;
              displayGames.appendChild(gameDiv);
            });
          } else {
            console.error(
              "Error: .display-games element not found during form submission"
            );
          }
        } else {
          console.error("Unexpected response structure:", data);
        }
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    });
  } else {
    console.error("Error: form element not found");
  }
});
