$(document).ready(function() {
  // Define the options for the second select based on the first select
  var optionsByValue = {
      genre: [ "Action-Adventure", "Action Role-Playing", "Fighting", "First-Person Shooter", "Party","Platform", "Puzzle", "Racing", "Rail Shooter", "Role-Playing", "Run and Gun", "Sandbox", "Simulation", "Sports"],
      platform: ["Dreamcast", "Game Boy", "Game Boy Advance", "Game Boy Color", "GameCube", "Neo Geo", "NES", "Nintendo 3DS", "Nintendo 64", "Nintendo DS", "Nintendo Switch", "PC", "PlayStation", "PlayStation 2", "PlayStation 3", "PlayStation 4", "PlayStation 5", "Sega Genesis", "Sega Saturn", "SNES", "Wii", "Wii U", "Xbox", "Xbox 360", "Xbox One", "Xbox Series X/S"],
      decade_created: ["1980s", "1990s", "2000s", "2010s", "2020s"],
      rating: ["1:star:️", "2:star:️", "3:star:️", "4:star:️", "5:star:️", "6:star:️", "7:star:️", "8:star:️", "9:star:️", "10:star:️",],
  };
  // Function to update the options in the second select based on the first select
  function updateSecondSelect() {
      var firstSelectValue = $('#firstSelect').val();
      console.log(firstSelectValue)
      // Hide second select if no option is selected in the first select
      if (!firstSelectValue) {
          $('#secondSelect').hide();
          return;
      }
      var options = optionsByValue[firstSelectValue];
      // Clear existing options in the second select
      $('#secondSelect').empty();
      // Add new options to the second select
      $.each(options, function(index, value) {
          $('#secondSelect').append('<option value="' + value + '">' + value + '</option>');
      });
      // Show the second select
      $('#secondSelect').show();
  }
  // Initial setup on document ready
  updateSecondSelect();
  // Event handler for when the first select changes
  $('#firstSelect').change(function() {
      updateSecondSelect();
  });
});
async function handleFormSearch (event) {
event.preventDefault()
const category = document.querySelector('#firstSelect').value.trim();
  const value = document.querySelector('#secondSelect').value.trim();
  alert(category + value)
  if (category && value) {
    const response = await fetch('/api/search/' + column, {
      method: 'POST',
      body: JSON.stringify({ value }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const data = response.json()
        console.log(data)
    //   document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
}
document.getElementById("search-form").addEventListener("submit", handleFormSearch)