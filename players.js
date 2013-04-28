function PlayerCtrl ($scope) {
	$scope.players = [];

	$scope.addPlayer = function () {
		$scope.players.push({text:$scope.newPlayer});
		$scope.newPlayer = '';
	};

}