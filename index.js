'use strict';
module.exports = function (red, green, blue) {
	if (typeof red === 'object') {
		var color = red;
	} else {
		var color = {
			red: red,
			green: green,
			blue: blue
		};
	}

	return 'rgb(' + color.red + ', ' + color.green + ', ' + color.blue + ')';
};
