/*
 * This file would be require'd in html */

const area = document.getElementById("area");

area.onfocus = function () {
	if (area.value === '') {
		area.value += '. ';
	}
};

area.onkeyup = function (event) {
	const keycode = event.keyCode || event.which;
	if (keycode == 13)
		area.value += '. ';

	var val = area.value;
	if (val.substr(val.length-1) == '\n') {
		area.value = val.substring (0, val.length-1);
	}
};
