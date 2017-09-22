'use strict'


/**
 * Merge sort
 * @param {Array} input array
 * @param {Function} comparator
 * @param {Boolean} If true, will add __swaps and __comparisons to array returned
 * @returns {Array} sorted array
 */
 module.exports = function(list, compare, addDebugInfo) {
	var compFunc = (compare || defaultCompare);

	if (!Array.isArray(list))
		throw new Error("Attempting to sort non-array");

	if (compare && typeof compare !== 'function')
		throw new Error("Expecting a function for comparison, received " + typeof(compare));

	var newList = list.slice();


	return divide(newList, compFunc, addDebugInfo);
 }


 function divide(list, comparator, addDebugInfo) {
 	var len = list.length;
 	var first, second;
 	if (len >= 2) {
 		first = list.slice(0, len/2);
 		second = list.slice(len/2, len);

 		// Recursive
 		return merge(comparator, divide(first, comparator, addDebugInfo), divide(second, comparator, addDebugInfo), addDebugInfo);
 	} else {
 		return list.slice();
 	}
 }


 function merge(comparator, list1, list2, addDebugInfo) {
 	var leftLen = list1.length;
 	var rightLen = list2.length;

 	var comparisons = 0;
 	var swaps = 0;

 	var merged = [];

 	// Combine our lists.
 	while (leftLen >0 && rightLen > 0) {
 		comparisons++;
 		// Does the left or right list come first?
 		if (comparator(list1[0], list2[0]) <= 0) {
 			merged.push(list1.shift());
 			leftLen--;
 		} else {
 			merged.push(list2.shift());
 			rightLen--;
 		}
 	}

 	if (leftLen > 0) {
 		// Still elements in list1.  Add the rest
 		merged.push.apply(merged, list1);
 	} else {
 		// Still elements in list2.  Add the rest.
 		merged.push.apply(merged, list2);
 	}

 	return merged;
 }



  /**
  * Swap array elements
  * @param {Array} The array containing elements
  * @param {Number} Index of first element
  * @param {Number} Index of second element
  */
 function swap(list, indexa, indexb) {
 	swaps++;
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