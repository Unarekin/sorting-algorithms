


/*
 * Selection sort
 * @param {Array} list to be sorted
 * @param {Function} compare Compare function
 * @param {Boolean} addDebugInfo will decorate the returned array with __swaps and __comparisons counts
 * @return {Array} sorted array
 */
 module.exports = function(list, compare, addDebugInfo) {

 	if (!Array.isArray(list))
 		throw new Error("Attempting to sort non-array");

 	if (compare && typeof compare !== 'function')
 		throw new Error("Expecting a function for comparison, received " + typeof(compare));

 	var compareFunc = compare || defaultCompare;

 	var newList = list.slice();


 	// Minimum value found
 	var min = 0;
 	// Current index
 	var index = 0;

 	var comparisons = 0;
 	var swaps = 0;

 	for (let i=0;i<newList.length;i++) {
 		index = i;

 		min = newList[i];
 		// Iterate remaining array items to find smaller
 		for (let j=i+1; j < newList.length;j++) {

 			comparisons++;
 			if (compareFunc(min, newList[j]) > 0) {
 				min = newList[j];
 				index = j;
 			}
 		}


 		if (i !== index) {
 			swaps++;
 			swap(newList, i, index);
 		}
 	}

 	if (addDebugInfo) {
 		newList.__swaps = swaps;
 		newList.__comparisons = comparisons;
 	}

 	return newList;
 }


 function defaultCompare(a, b) {
 	return ((a > b) ? 1 : (b > a) ? -1 : 0);
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