/**
 * Module dependencies.
 */
var Benchmark = require('benchmark')
	, suite = new Benchmark.Suite
	, p = require('./lib');

/**
 * Parameters.
 */
var a = 1
	, b = 2;

/**
 * Array to store instances.
 */
var adder_classical = []
	, adder_prototypal = []
	, adder_factory = [];

/**
 * Benchmark.
 */
suite
	.add('Classical', function() {
	  adder_classical.push(new p.Adder_classical(a,b));
	  adder_classical.slice(-1)[0].add();
	})
	.add('Prototypal', function() {
	  adder_prototypal.push(Object.create(p.Adder_prototypal));
	  adder_prototypal.slice(-1)[0].a = a;
	  adder_prototypal.slice(-1)[0].b = b;
	  adder_prototypal.slice(-1)[0].add();
	})
	.add('Factory', function() {
	  adder_factory.push(new p.Adder_factory(a,b));
	  adder_factory.slice(-1)[0].add();
	})
	.on('cycle', function(event) {
	  console.log(String(event.target));
	})
	.on('complete', function() {
	  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
	})	
	.run({ 'async': true }); // run async