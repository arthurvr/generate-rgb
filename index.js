'use strict';
module.exports = function (red, green, blue) {
	var color = typeof red === 'object' ? red : {
		red: red,
		green: green,
		blue: blue
	};

	return 'rgb(' + color.red + ', ' + color.green + ', ' + color.blue + ')';
};
