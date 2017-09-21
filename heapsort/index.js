'use strict'

var swaps = 0;
var comparisons = 0;



/**
 * Insertion sorting
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

	const count = newList.length;
	let end = count - 1;


	heapify(newList, compFunc);

	while (end > 0) {
		swaps++;
		swap(newList, end, 0);
		end--;
		siftDown(newList, 0, end, compFunc);
	}

	if (addDebugInfo) {
		newList.__swaps = swaps;
		newList.__comparisons = comparisons;
	}

	return newList;
 }




 /*
  * Heapify
  * @param {Array} Array to be heaped.
  * @param {Function} Comparison function
  */
 function heapify(list, comp) {
 	const count = list.length;
 	let start = Math.floor((count - 2) / 2);

 	while (start >= 0) {
 		siftDown(list, start, count - 1, comp);
 		start--;
 	}
 }


 /*
  * siftDown
  * @param {Array} Array to be sifted
  * @param {Number} Index to start
  * @param {Number} Index to end
  * @param {Function} Comparison fucntions
  */
 function siftDown(list, start, end, comparator) {
 	let root = start;

 	while (root * 2 + 1 <= end) {
 		const lChild = root * 2 + 1;
 		const rChild = lChild + 1;
 		let swapIndex = root;

 		comparisons++;
 		if (comparator(list[swapIndex], list[lChild]) < 0) {
 			swapIndex = lChild;
 		}

 		comparisons++;
 		if (rChild <= end && comparator(list[swapIndex], list[rChild]) < 0) {
 			swapIndex = rChild;
 		}

 		if (swapIndex === root)
 			return;

 		swap(list, root, swapIndex);
 		root = swapIndex;
 	}
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