var jewel = {
	screens : {},
	settings : {
		rows : 8,
		cols : 8,
		baseScore : 100,
		numJewelTypes : 7
	}
};

window.addEventListener('load', function() {

	Modernizr.load([
		{
			load: [
				'scripts/sizzle.js',
				'scripts/dom.js',
				'scripts/game.js',
				'scripts/screen.splash.js',
				'scripts/screen.main-menu.js',
				'scripts/board.js'
			],

			complete: function() {
				console.log('Załadowano wszystkie biblioteki.');
				jewel.game.showScreen('splash-screen');
			}
		}
	]);

}, false);