const Blinkt = require('blinktjs');

const blinkt = new Blinkt();

setTimeout(function(){
	blinkt.setAll(255, 0, 0);
	blinkt.draw();
	console.log('red');
}, 0);

setTimeout(function() {
	blinkt.setAll(0, 255, 0);
	blinkt.draw();
	console.log('green');
}, 1000);

setTimeout(function() {
	blinkt.setAll(0, 0, 255);
	blinkt.draw();
	console.log('blue');
}, 2000);

setTimeout(function() {
	console.log('end');
}, 4000);
