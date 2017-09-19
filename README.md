# SortingAlgorithms
 
This is a repository meant to hold some examples of personal implementations of different sorting methodologies in an effort to gain familiarity and better understanding of the differences between them. 
 
## Algorithms
### Bubble sort
The bubble sort algorithm implemented herein is a fairly standard one, as the algorithm itself is remarkably simple.  There is some optimization, however.  Notably, it will use the index of the last swap made in a pass as the maximum index to check on the next pass.  This should avoid unnecessary comparisons on subsequent passes, as it has already been determined that those elements are in the proper order.
 
### Selection sort
Simple, standard implementation of a selection sort.

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
