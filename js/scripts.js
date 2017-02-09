// plik scripts.js

function rysujchoinkę(b) {
	for ( var n = 0 ; n < 6 ; n++) {
		var star = " ";
		for ( var a = 0 ; a*2-1 ; a++) {
			var star = (star += '*');
		}
		console.log(star);
	}
}

