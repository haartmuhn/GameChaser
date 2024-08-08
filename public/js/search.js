$(document).ready(function () {
  var optionsByValue = {
    genre: [
      "Action-Adventure",
      "Action Role-Playing",
      "Fighting",
      "First-Person Shooter",
      "Party",
      "Platform",
      "Puzzle",
      "Racing",
      "Rail Shooter",
      "Role-Playing",
      "Run and Gun",
      "Sandbox",
      "Simulation",
      "Sports",
    ],
    platforms: [
      "Dreamcast",
      "Game Boy",
      "Game Boy Advance",
      "GameCube",
      "NES",
      "Nintendo 3DS",
      "Nintendo 64",
      "Nintendo DS",
      "Nintendo Switch",
      "PC",
      "PlayStation",
      "PlayStation 2",
      "PlayStation 3",
      "PlayStation 4",
      "PlayStation 5",
      "Sega Genesis",
      "Sega Saturn",
      "SNES",
      "Wii",
      "Wii U",
      "Xbox",
      "Xbox 360",
      "Xbox One",
      "Xbox Series X/S",
    ],
    decade_created: ["1980s", "1990s", "2000s", "2010s", "2020s"],
    rating: [
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
    ],
  };

  function updateSecondSelect() {
    var firstSelectValue = $("#firstSelect").val();
    if (!firstSelectValue) {
      $("#secondSelect").hide();
      return;
    }

    var options = optionsByValue[firstSelectValue];
    $("#secondSelect").empty();
    $.each(options, function (index, value) {
      $("#secondSelect").append(
        '<option value="' + value + '">' + value + "</option>"
      );
    });

    $("#secondSelect").show();
  }

  updateSecondSelect();

  $("#firstSelect").change(function () {
    updateSecondSelect();
  });

  $("form").on("submit", function (event) {
    event.preventDefault();
    var category = $("#firstSelect").val();
    var value = $("#secondSelect").val();

    $.ajax({
      url: "/api/search", // Ensure this matches your backend route
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify({ filter: category, value: value }),
      success: function (data) {
        var gameResults = $(".display-games");
        gameResults.empty();
        if (data.games && Array.isArray(data.games)) {
          if (data.games.length === 0) {
            gameResults.html("<p>No results found.</p>");
          } else {
            data.games.forEach(function (game) {
              var gameHtml = `
                <div class="game-card bg-white w-44 rounded-lg shadow-lg overflow-hidden mb-4">
                  <img src="${game.imageUrl || `./images/image${game.id}.${hasMapExample[game.id]}`}" alt="${
                game.name
              }" class="w-full h-48 object-cover">
                  <div class="p-4">
                    <h3 class="text-lg font-semibold">${game.name}</h3>
                    <p class="text-sm text-gray-500">${game.decade_created}</p>
                    <p class="text-sm text-gray-700">${game.genre}</p>
                    <p class="text-sm font-medium text-gray-900">${
                      game.rating
                    }</p>
                  </div>
                </div>`;
              gameResults.append(gameHtml);
            });
          }
        } else {
          console.error("Unexpected response structure:", data);
          gameResults.html("<p>Error: Unexpected response structure.</p>");
        }
      },
      error: function (error) {
        console.error("Error fetching search results:", error);
        $(".display-games").html("<p>Error fetching search results.</p>");
      },
    });
  });
});
