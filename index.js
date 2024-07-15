// List puppies from API for team Ruff

const state = {
  teams: []
}

// Get player data
const getTeams = async() => {
  try {const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2406-FTB-ET-WEB-FT/teams`);
  const responseJSON = await response.json();
  state.teams = responseJSON.data.teams;
  } catch(e) {
    alert(e);
  }
  console.log(state.teams);
}

getTeams();

  // Render team roster
    // Grab where list will appear on page
    // Create ul inside of which players will be listed
    // Put ul on page
    // Loop through player list in state and create li for each player
    // Put each li into ul
    // Put player name inside each li

// Click on puppy to show details
  // Put event listener on each puppy (use foreach)
  // When you click on puppy, re-render page with that puppy's details
  // Include back button to re-render main list