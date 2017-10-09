'use strict'

module.exports = function bucketsort(list, addDebugInfo) {

  if (!Array.isArray(list))
    throw new Error("Attempting to sort non-array");


  // Shallow copy
  var newList = list.slice();

  var high = newList[0];
  var low = newList[0];

  var buckets = new Array(newList.length);

  for (var i=0;i<newList.length;i++) {
    if (newList[i] > high) high = newList[i];
    if (newList[i] < low) low = newList[i];
    buckets[i] = [];
  }


  var interval = (high - low);
  if (interval === 0) interval = 1;

  for (var i=0;i<newList.length;i++) {
    var index = Math.floor(newList.length * ((newList[i] - low) / interval));
    if (index === newList.length) index--;
    buckets[index].push(newList[i]);
  }

  
  for (var i=0;i<newList.length;i++) {
    buckets[i] = sort(buckets[i]);
  }


  var pointer = 0;
  for (var i=0;i<buckets.length;i++) {
    for (var j=0;j<buckets[i].length;j++) {
      newList[pointer] = buckets[i][j];
      pointer++;
    }
  }


  if (addDebugInfo) {
    newList.__swaps = swaps;
    newList.__comparisons = comparisons;
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



/**
 * Quick and dirty insertion sort.
 * @params {Array} list - the array to be sorted
 */
function sort(list) {
  var j, temp, search;
  var newList = list.slice();
  for (let i=1; i < newList.length;i++) {
    temp = newList[i];
    j = i - 1;
    search = true;

    while ((j>=0) && search) {
      if (temp < newList[j]) {
        newList[j+1] = newList[j];
        j--;
      } else {
        search = false;
      }
    }
    newList[j+1] = temp;
  }

  return newList;
}


/*

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

/**/