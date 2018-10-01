///////////////////////////////// [Algorithms] /////////////////////////////////
/* https://github.com/kennymkchan/interview-questions-in-javascript
 *  TABLE OF CONTENTS
 *      1. Array
 *      2. Strings
 *      3. Stacks and Queues
 *      4. Recursion
 *      5. Numbers
 *      6. JavaScript Specific
 * */



/* 1.1 Given an array of unsorted integers, find the largest product yield from 
 *      three of the integers.
 * */
var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
var result = largestProduct(unsortedArray);

// We will sort the array to then multiply min and max integer combinations
function largestProduct(unsorted) {
    var sortedArray = unsorted.sort((sortIntegers)),
        product1 = 1,
        product2 = 1,
        array_n_element = sortedArray.length - 1;

    // Get the product of the three largest integers in the now sorted array
    for (var x = array_n_element; x > array_n_element - 3; x--) {
        product1 *= sortedArray[x];
    }
    // Get the product of the two smallest integers and the largest integer
    product2 = sortedArray[0] * sortedArray[1] * sortedArray[array_n_element];

    // Return whatever is biggest
    return (product1 > product2) ? product1 : product2;
}

// This function is used to ensure values are sorted as Integers and not Strings
function sortIntegers(a, b) {
    return a - b;
}

/* 1.2 Given an array of unsorted integers, as well as the lower and upper bound
 *      find the missing number that would complete the series of numbers
 * */
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7],
    upperBound = 9,
    lowerBound = 1;
var result = findMissingNumber(arrayOfIntegers, upperBound, lowerBound);

function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {
    var sumOfIntegers = 0,
        expectedSum = 0;

    for (var i = 0; i < arrayOfIntegers.length; i++) {
        sumOfIntegers += arrayOfIntegers[i];
    }

    for (var x = lowerBound; x <= upperBound; x++) {
        expectedSum += x;
    }

    return expectedSum - sumOfIntegers;
}

/* 1.3 Given an array of unsorted integers, return an array of unique values
 * 
 * */
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// ES6 Implementation - The Set object lets you store unique values of any type
// - The Spread Syntax ... allows the set to expand into the array enclosing it
var result = [...new Set(array)];

// ES5 Implementation
var result = array.filter(onlyUnique);

function onlyUnique (value, index, self) {
    return self.indexOf(value) === index;
}

/* 1.4 Given an array of unsorted integers, return the largest difference where 
 *      the smaller number has a smaller index compared to the greater vaule 
 *      being subtracted.
 * */
var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
var result = findLargestDifference(array);

function findLargestDifference (array) {
    if (array.length === 0) return -1;

    var maxDifference = 0,
        minValue = array[0]; // keeps the smallest value as we iterate once

    for (var i = 1; i < array.length; i++) {
        if (array[i] > minValue && (array[i] - minValue > maxDifference)) {
            maxDifference = array[i] - minValue;
        } else if (array[i] <= minValue) {
            minValue = array[i];
        }
    }

    if (maxDifference <= 0) return -1;

    return maxDifference;    
}

/* 1.5 Given an array of integers, return an array such that each index contains
 *      the product of all elements except the value at the index n of the 
 *      original array. No division and O(n) time
 * */
var array1 = [2, 2, 4, 1],
    array2 = [0, 0, 0, 2],
    array3 = [-2, -2, -3, 2];

result = productExcludeSelf(array1);
result = productExcludeSelf(array2); 
result = productExcludeSelf(array3); 

function productExcludeSelf(array) {
    var output = [];
    
    //store product of those left of the current position in current position
    var product = 1;
    for (var i = 0; i < array.length; i++) {
        output.push(product);
        product *= array[i];
    }
    //multiply the product of those right of current position by those left of 
    // of current position and store in current position
    var product = 1;
    for (var i = array.length - 1; i >= 0; i--) {
        output[i] *= product;
        product *= array[i];
    }

    return output;
}

/* 1.6 Given two arrays of integers, find an intersection: where a common 
 *      element exist in both arrays. We will only return a list of unique 
 *      values for such intersections.
 * */

var array1 = [2, 2, 4, 1],
    array2 = [1, 2, 0, 2];

var result = intersection(array1, array2); 

function intersection(array1, array2) {
    var hashmap = {},
        output = [];

    array1.forEach(element => hashmap[element] = 1);

    array2.forEach(element => {
        if (hashmap[element] === 1) {
            output.push(element);
            hashmap[element]++;
        }
    });
  
    return output;
}



