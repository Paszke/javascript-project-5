// plik scripts.js

function rysujChoinke(b) {
	for ( var n = 0 ; n <= b ; n++) {
		var star = '';
		for ( var a = 0 ; a <= n * 2 - 1 ; a++) {
			star += '*';
		}
		console.log(star);
	}
}

rysujChoinke(5);