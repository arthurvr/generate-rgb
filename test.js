import test from 'ava';
import rgb from './';

test('generates an rgb(red, green, blue) string', t => {
	t.is(rgb(100, 100, 100), 'rgb(100, 100, 100)');
	t.end();
});

test('Also takes an object', t => {
	t.is('rgb(100, 200, 10)', rgb({
		red: 100,
		green: 200,
		blue: 10
	}));

	t.end();
});
