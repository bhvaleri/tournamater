function TournamentCtrl ($scope) {
	$scope.players = [];

	$scope.addPlayer = function () {
		if ($scope.newPlayer && $scope.players.length < 8 ) {
			$scope.players.push({text:$scope.newPlayer});
			$scope.newPlayer = '';
		}
	};
}