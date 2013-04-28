function PlayerCtrl ($scope) {
	$scope.players = [];

	$scope.addPlayer = function () {
		if ($scope.newPlayer) {
			$scope.players.push({text:$scope.newPlayer});
			$scope.newPlayer = '';
		}
	};

}