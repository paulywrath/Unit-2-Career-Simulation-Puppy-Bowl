const state = {
  teams: []
}

const main = document.querySelector(`main`);

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
    const li = document.createElement(`li`);
    li.innerText = player.name;
    ul.append(li);
  });
    
  const playerListItems = document.querySelectorAll(`li`);

  playerListItems.forEach((playerLI) => {
    playerLI.addEventListener(`click`, (event) => {
      const teamRuffPlayers = state.teams[0].players;
      
      const clickedPlayer = teamRuffPlayers.find((player) => {
        return player.name === event.target.innerText;
      }) 

      main.innerHTML = `
      <h1>Player Details</h1>
      <img src="${clickedPlayer.imageUrl}" alt="Photo of the player">
      <h2>Name: ${clickedPlayer.name}</h2>
      <h2>Breed: ${clickedPlayer.breed}</h2>
      <button>Back to Roster</button>
      `

      const button = document.querySelector(`button`);

      button.addEventListener(`click`, () => {
        renderTeams();
      })
    })
  })
}
