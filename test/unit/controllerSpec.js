'use strict';

describe("Tournament controllers", function () {
	it("should create a tournament with 0 players", function () {
		var scope = {};
		var ctrl = new TournamentCtrl(scope);

		expect(scope.players.length).toBe(0);
	});
});