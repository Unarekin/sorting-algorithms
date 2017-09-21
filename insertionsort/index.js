'use strict'

/**
 * Insertion sorting
 * @param {Array} input array
 * @param {Function} comparator
 * @returns {Array} sorted array
 */
 module.exports = function(list, compare, addDebugInfo) {

  var compFunc = (compare || defaultCompare);

  if (!Array.isArray(list))
    throw new Error("Attempting to sort non-array");

  if (compare && typeof compare !== 'function')
    throw new Error("Expecting a function for comparison, received " + typeof(compare));

 	var j, temp, search;

 	var newList = list.slice();

 	var comparisons = 0;
 	var swaps = 0;

 	for (let i=1; i < newList.length; i++) {
 		temp = newList[i];
 		j = i - 1;
 		search=true;

 		while((j>=0) && search) {
 			comparisons++;
 			if (compFunc(temp, newList[j]) < 0) {
 				swaps++;
 				newList[j+1] = newList[j];
 				j--;
 			} else {
 				search=false;
 			}
 		}
 		newList[j+1] = temp;
 	}

 	if (addDebugInfo) {
 		newList.__comparisons = comparisons;
 		newList.__swaps = swaps;
 	}
 	return newList;
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


 // Conventional wisdom might say "But Sam, why not just use b - a?"
 // Well, because that doesn't actually work on strings.
 // This also wont' do much to compare objects, but you should really probably be passing your own compare function
 function defaultCompare(a, b) {
  return ((a > b) ? 1 : (b > a) ? -1 : 0);
 }