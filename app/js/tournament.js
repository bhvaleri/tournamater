function TournamentCtrl ($scope) {
	$scope.players = [];
	//this is not the best way of doing this, but will work for now
	$scope.tournament = {
		round1: [
			{
				player1: "unknown",
				player2: "unknown"
			},
			{
				player1: "unknown",
				player2: "unknown"
			},
			{
				player1: "unknown",
				player2: "unknown"
			},
			{
				player1: "unknown",
				player2: "unknown"
			},
		],
		round2: [
			{
				player1: "unknown",
				player2: "unknown"
			},
			{
				player1: "unknown",
				player2: "unknown"
			}
		],
		round3: [
			{
				player1: "unknown",
				player2: "unknown"
			}
		]

	};

	$scope.addPlayer = function () {
		if ($scope.newPlayer && $scope.players.length < 8 ) {
			$scope.players.push({text:$scope.newPlayer});
			$scope.newPlayer = '';
		}
	};

	$scope.newTournament = function () {
		if ($scope.players.length == 8) {
			//randomize players
			var players = $scope.players;
			//start round 1
			var tournament = $scope.tournament;
			var round1 = tournament['round1'];

			for (var i = 0; i < 4; i++) {
				//add players for round 1?
				round1[i]["player1"] = players[i];
				round1[i]["player2"] = players[i+1];
			}
		}		
	};
}