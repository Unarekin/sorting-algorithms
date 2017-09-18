
/**
 * Bubble sorting
 * @param {Array} input array
 * @param {Function} comparator
 * @returns {Array} sorted array
 */



 module.exports = function(list, compare) {
  var compFunc = (compare || defaultCompare);

  // Shallow copy
  var newList = list.slice();

  var n = newList.length;
  var swaps = 0;
  var comparisons = 0;
  do {
    var newN = 0;
    for (let i=1; i < n ; i++) {
      comparisons++;
      if (compFunc(newList[i], newList[i-1]) < 0) {
        swap(newList, i, i-1);
        swaps++;
        newN = i;
      }
    }
    n = newN;
  } while (n > 0)

  newList.__swaps = swaps;
  newList.__comparisons = comparisons;

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