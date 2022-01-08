const team = {
    _players: [ 
      {
        firstName: 'Eduard',
        LastName: 'Coelho',
        age: 22
      },
      {
        firstName: 'Junior',
        LastName: 'Martinez',
        age: 22
      },
      {
        firstName: 'David',
        lastName: 'Farias',
        age: 21
      },
    ],
    _games: [
      {
        opponent: 'Leones',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Panteras',
        teamPoints: 54,
        opponentPoints: 39
      },
      {
        opponent: 'Cocodrilos',
        teamPoints: 49,
        opponentPoints: 47
      },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
  
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age,
      }
    return this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints,
    } 
    return this._games.push(game);
    },
  }
  
  team.addGame('Marineros', 60, 56)
  team.addGame('Piratas', 80, 75)
  team.addGame('Gigantes', 43, 60)
  console.log(team.games)
  console.log(team.players)