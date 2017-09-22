'use strict'
var assert = require('assert');
var sort = require('../');

describe('merge sort', function() {
	it('Sorts [2,1,3]', function() {
		assert.deepEqual(sort([2,1,3]), [1,2,3]);
	});
	it('Sorts [2,1,3] in reverse', function() {
		assert.deepEqual(sort([2, 1, 3], function(a, b) { return b - a; }), [3, 2, 1]);
	});
	it('Sorts ["this", "string", "is", "a", "test"]', function() {
		assert.deepEqual(sort(["this", "string", "is", "a", "test"]), ["a", "is", "string", "test", "this"]);
	});
});