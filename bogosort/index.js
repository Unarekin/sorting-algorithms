'use strict'

module.exports = function(list, compare, addDebugInfo) {
 	if (!Array.isArray(list))
 		throw new Error("Attempting to sort non-array");

 	if (compare && typeof compare !== 'function')
 		throw new Error("Expecting a function for comparison, received " + typeof(compare));

 	var compareFunc = compare || defaultCompare;


 	var newList = list.slice();

 	var shuffles = 0;
 	var start = new Date();


 	while (!isSorted(newList, compareFunc)) {
 		shuffle(newList);
 		shuffles++;

 		if (addDebugInfo) {
 			process.stdout.cursorTo(0);
 			process.stdout.write("Bogosort: " + shuffles.toLocaleString() + " shuffles, " + formatMilliseconds(new Date() - start) + "     ");
 		}
 	}

 	if (addDebugInfo) {
	 	process.stdout.cursorTo(0);
	 	process.stdout.clearLine();

	 	newList.__swaps = shuffles;
 	}

 	return newList;
}



/**
 * Determine if an array is sorted.
 * @param {Array} array to check
 * @param {Function} Comparison function
 * @returns {Boolean}
 */
function isSorted(array, comparator) {
	var i = array.length;
	while (--i) {
		var cmp = comparator(array[i], array[i-1]);
		if (cmp < 0)
			return false;
	}
	return true;
}



/**
 * A fairly efficient knuth/Fischer-Yates shuffle implementation
 * @param {Array} array - Array to be shuffled
 * @returns {Array} Shuffled array
 */

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}



 function defaultCompare(a, b) {
 	return ((a > b) ? 1 : (b > a) ? -1 : 0);
 }


/**
 * Formats a given number of milliseconds into minutes and seconds
 * @param {Number} milliseconds - Time to format, in milliseconds
 * @returns {String} Formatted string
 */
function formatMilliseconds(milliseconds) {
	var outputs = [];

	if (milliseconds > 1000) {
		var working = milliseconds;

		if (working >= 60000) {
			let minutes = Math.floor(working/60000);
			outputs.push(minutes + "m");
			working -= (minutes * 60000);
		}

		outputs.push(Math.floor(working/1000) + "s");
	} else {
		outputs.push(milliseconds + "ms");
	}



	return outputs.join(" ");
}