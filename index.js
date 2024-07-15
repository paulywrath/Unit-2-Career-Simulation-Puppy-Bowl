// List puppies from API for team Ruff

const state = {
  teams: []
}

const main = document.querySelector(`main`);

// Get player data
const getTeams = async() => {
  try {const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2406-FTB-ET-WEB-FT/teams`);
  const responseJSON = await response.json();
  state.teams = responseJSON.data.teams;

renderTeams();

  } catch(e) {
    alert(e);
  }
}

getTeams();

const renderTeams = () => {
  main.innerHTML = `<h1>Team Ruff Roster</h1>`
  
  const ul = document.createElement(`ul`);
  main.append(ul);

  state.teams[0].players.forEach(player => {
    li = document.createElement(`li`);
    li.innerText = player.name;
    ul.append(li);
  });

  console.log(state.teams[0].players);
}


// Click on puppy to show details
  // Put event listener on each puppy (use foreach)
  // When you click on puppy, re-render page with that puppy's details
  // Include back button to re-render main list