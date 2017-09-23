'use strict'

module.exports = function(list, compare, addDebugInfo) {
 	if (!Array.isArray(list))
 		throw new Error("Attempting to sort non-array");

 	if (compare && typeof compare !== 'function')
 		throw new Error("Expecting a function for comparison, received " + typeof(compare));

 	var compareFunc = compare || defaultCompare;


 	var newList = list.slice();

 	return quicksort(newList, 0, newList.length-1, compareFunc);
}


function quicksort(list, low, high, compare) {
	if (low >= high)
		return;

	var index = partition(list, low, high, compare);
	quicksort(list, low, index-1, compare);
	quicksort(list, index+1, high, compare);

	return list;
}

function partition(list, low, high, compare) {
	var val = list[low];
	var i = low, j = high+1;
	while (true) {
		// Move "pointers"

		while (compare(list[++i], val) < 0) {
			if (i >= high)
				break;
		}

		while (compare(val, list[--j]) < 0) {
			if (j <= low)
				break;
		}

		if (i >= j)
			break;

		swap(list, i, j);
	}
	swap(list, low, j);
	return j;
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