// Brown-Forsythe Test
// Luke Mitchell, April 2016
// https://github.com/lukem512/brown-forsythe-test

var bf = require('../src/brown-forsythe');

var tests = [
	// TODO
];

var returnCode = 0;

tests.forEach(function(t) {
	try {
		var f = bf.test(t.samples);
		if (!t.expected) throw Error('Unexpected results');
		if (Math.abs(f - t.expected) > 0.0001) throw Error('Returned results did not match expected results (' + f + ')');
	} catch (err) {
		if (!t.rejected) {
			console.error(t.name, err);
			returnCode = 1;
		}
	}
});

process.exit(returnCode);
