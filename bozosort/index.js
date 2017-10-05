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
 		var index1 = Math.floor(Math.random() * newList.length);
 		var index2 = Math.floor(Math.random() * newList.length);
 		swap(newList, index1, index2);
 	}

 	return newList;
 };


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
  * Swap array elements
  * @param {Array} The array containing elements
  * @param {Number} Index of first element
  * @param {Number} Index of second element
  */
 function swap(list, indexa, indexb) {
 	var temp = list[indexb];
 	list[indexb] = list[indexa];
 	list[indexa] = temp;
 }

  /**
  * Default comparison function
  * @param First item to compare
  * @param Second item to compare
  * @returns {Number} 0, 1, or -1 if item A is equal, greater than, or less than item B
  */
 function defaultCompare(a, b) {
  return ((a > b) ? 1 : (b > a) ? -1 : 0);
 }