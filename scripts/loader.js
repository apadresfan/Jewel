var jewel = {
	screens : {}
};

window.addEventListener('load', function() {

	Modernizr.load([
		{
			load: [
				'scripts/sizzle.js',
				'scripts/dom.js',
				'scripts/game.js',
				'scripts/screen.splash.js',
				'scripts/screen.main-menu.js'
			],

			complete: function() {
				console.log('Załadowano wszystkie biblioteki.');
				jewel.game.showScreen('splash-screen');
			}
		}
	]);

}, false);