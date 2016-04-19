// Brown-Forsythe Test
// Luke Mitchell, April 2016
// https://github.com/lukem512/brown-forsythe-test

var bf = require('../src/brown-forsythe');

var tests = [
	{
		name: 'Simple Brown-Forsythe Test #1',
		expected: 1.5235,
		rejected: false,
		samples: [
			[65, 61, 81, 88, 69, 89, 55, 84, 86, 84, 71],
			[77, 74, 80, 76, 77, 93, 64, 83, 75, 82, 70],
			[69, 70, 71, 80, 74, 78, 60, 80, 81, 86, 73],
			[75, 66, 74, 88, 69, 77, 50, 77, 87, 92, 81],
			[69, 68, 79, 79, 76, 80, 63, 78, 79, 85, 79]
		]
	}
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
