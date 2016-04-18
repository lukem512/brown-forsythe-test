// Brown-Forsythe Test
// Luke Mitchell, April 2016
// https://github.com/lukem512/brown-forsythe-test

var sm = require('statistical-methods');

// Perform the Brown-Forsythe transformation.
// This is better than the Levene test for data
// that is not quite Gaussian (normally distributed).
var transform = module.exports.transform = function(samples) {
	var z = [];

	samples.forEach(function(sample) {
		var med = sm.median(sample);
		var zj = [];
		sample.forEach(function(s) {
			z.push(Math.abs(med - s));
		});
		z.push(zj);
	});

	return z;
};

// Compute the F-value
var test = module.exports.test = function(samples) {
	var z = transform(samples);

	// Compute N, the total number of observations
	var N = 0, p = samples.length;
	samples.forEach(function(sample) {
		N += sample.length;
	});

	// Compute z.., the mean of all zij
	var zs = [];
	z.forEach(function(zi) {
		zs = zs.concat(zi);
	});
	var zdotdot = sm.mean(zs);

	// Compute the denominator and the numerator
	var numerator = 0, denominator = 0;
	for (var i = 0; i < p; i++) {

		// The number of observations in sample i
		var n = samples[i].length;

		for (var j = 0; j < n; j++) {

			// The mean of all zij for sample i
			var zidot = sm.mean(z[i]);
			var dz = (zidot - zdotdot);

			numerator += n * (dz*dz);
			denominator += z[i][j] - zidot;
		}
	}

	// Add divisors
	numerator = (N - p) * numerator;
	denominator = (p - 1) * denominator;

	// Return ratio
	return (numerator / denominator); 
};
