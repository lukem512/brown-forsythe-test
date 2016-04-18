# Brown-Forsythe Test

[![Build Status](https://travis-ci.org/lukem512/brown-forsythe-test.svg?branch=master)](https://travis-ci.org/lukem512/brown-forsythe-test) ![Build Status](https://david-dm.org/lukem512/brown-forsythe-test.svg) [![npm](https://img.shields.io/npm/l/brown-forsythe-test.svg)](https://www.npmjs.com/package/brown-forsythe-test) [![npm](https://img.shields.io/npm/v/brown-forsythe-test.svg)](https://www.npmjs.com/package/brown-forsythe-test) [![npm](https://img.shields.io/npm/dm/brown-forsythe-test.svg)](https://www.npmjs.com/package/brown-forsythe-test)

An NPM module providing the Brown-Forsythe parametric statistical test. The test can be used to compute a p-value when performing [Analysis of Variance](https://www.npmjs.com/package/anova) (ANOVA).

To use it, simply install via NPM and include it in your project file.

```
	var bf = require('brown-forsythe-test');
```

To compute the F-test of an array of samples use the `test` function:

```
	var samples = [[3,3,5,1], [1,2,3]];

	console.log(bf.test(samples));
```
