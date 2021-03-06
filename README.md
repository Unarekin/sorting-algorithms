# SortingAlgorithms
 
This is a repository meant to hold some examples of personal implementations of different sorting methodologies in an effort to gain familiarity and better understanding of the differences between them. 
 
## Algorithms
### Bubble sort
The bubble sort algorithm implemented herein is a fairly standard one, as the algorithm itself is remarkably simple.  There is some optimization, however.  Notably, it will use the index of the last swap made in a pass as the maximum index to check on the next pass.  This should avoid unnecessary comparisons on subsequent passes, as it has already been determined that those elements are in the proper order.
https://en.wikipedia.org/wiki/Bubble_sort
 
### Selection sort
Simple, standard implementation of a selection sort.
https://en.wikipedia.org/wiki/Selection_sort

### Insertion sort
Standard implementation of an insertion sort.
https://en.wikipedia.org/wiki/Insertion_sort

### Heap sort
A pretty naïve implementation of using a binary heap to sort an array of elements.  This module only implements the initial creation of a heap, and does not include any mechanism to insert or remove elements once it is created, as we only care about using it to sort data.
https://en.wikipedia.org/wiki/Heapsort

### Merge sort
Simplistic, recursive implementation of a merge sort.
https://en.wikipedia.org/wiki/Merge_sort

### Shaker sort
An adaptation of bubble sort, the shaker (or cocktail shaker, bidirectional bubble, or ripple sort) seeks to address the problem of what are referred to as "turtles" -- items in an array being sorted that will take a great many swaps to get to their proper place.  These will generally be items at the beginning of the list that belong at the end, or vice versa.

A shaker sort should be quicker than bubble in cases where the list being sorted has turtles, but it does not tend to be more efficient than other algorithms entirely.

https://en.wikipedia.org/wiki/Cocktail_shaker_sort

## Bucket sort
An implementation of a bucket sort algorithm.  Once array items have been allocated into their buckets, they are sorted in place with an insertion sort algorithm.
https://en.wikipedia.org/wiki/Bucket_sort

## Bogosort
Hopefully nobody makes a serious attempt to use this particular algorithm.  Bogosort randomly orders the elements in an array, then checks to see if its sorted.  It continues to do this until they happen to be in order.  It is very unlikely that it will actually finish.
https://en.wikipedia.org/wiki/Bogosort

## Bozosort
Similar to the bogosort in that you really, really do not want to do this.  Will randomly swap two elements until the array is sorted.
https://en.wikipedia.org/wiki/Bogosort#Related_algorithms

## Testing
Tests are written in mocha and may require this library be installed.

ex:

```sh
sudo npm install -g mocha
```

Otherwise, ```npm run test ``` will execute the tests.

## History
 
Version 1.0 (2017-09-18) - Initial setup
 
## License
 
The MIT License (MIT)

Copyright (c) 2015 Chris Kibble

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
