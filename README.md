# Brown-Forsythe Test

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
