/**
 * Classical JavaScript Constructors.
 */
var Adder_classical = function(a,b) {
		this.a = a
	, this.b = b
	, this.d = new Date();
};
Adder_classical.prototype.add = function() {
	return this.a + this.b;
}
exports.Adder_classical = Adder_classical;

/**
 * Pure Prototypal Objects.
 *
 * Without using constructor functions.
 * This isn't quite as powerful as the constructor + prototype method, 
 * but is often much easier to understand since there is less indirection.
 */
var Adder_prototypal = {
	d: new Date(),
	add: function() {
		return this.a + this.b;
	}
}
exports.Adder_prototypal = Adder_prototypal;

/**
 * Object Factories.
 *
 * Instead of defining a prototype object with all the shared functions 
 * and then creating instances of those, simply call a function that returns 
 * a new object every time.
 */
var Adder_factory = function(a,b) {
	var d = new Date();
	return {
		add: function() {
			return a + b
		}
	}
}
exports.Adder_factory = Adder_factory;