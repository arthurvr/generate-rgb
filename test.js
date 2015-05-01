'use strict';
var assert = require('assert');
var rgb = require('./');

it('generates an rgb(red, green, blue) string', function () {
	assert.strictEqual(rgb(100, 100, 100), 'rgb(100, 100, 100)');
});
