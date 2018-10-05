///////////////////////////////// [Algorithms] /////////////////////////////////
/* https://github.com/kennymkchan/interview-questions-in-javascript
 *  TABLE OF CONTENTS
 *      1. Array
 *      2. Strings
 *      3. Stacks and Queues
 *      4. Recursion
 *      5. Numbers
 *      6. JavaScript Specific
**/



/* 1.1 Given an array of unsorted integers, find the largest product yield from 
 *      three of the integers.
**/
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
**/
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
**/
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
**/
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
**/
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
**/

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

/* 1.7 Implement and iterative binary search
**/

var array1 = [0, 1, 2, 3, 4, 5, 6];
var array2 = [1, 2, 3, 4, 5, 6];
var array3 = [6, 5, 4, 3, 2, 1, 0];

var result = itBinSearch(array1, 5); 
var result = itBinSearch(array2, 0); 
var result = itBinSearch(array3, 5); 



function itBinSearch(array, value) {
    var left = 0;
    var right = array.length - 1;

    while (left <= right) {
        var pivot = Math.floor((left + right) / 2);
        if (array[pivot] === value) {
            // exit if the value has been found
            return true;
        } else if (value < array[pivot]) {
            // search left of the pivot with the right most position becoming 
            // one less than pivot
            right = pivot - 1;
        } else {
            // search right of the pivot with the left most position becoming
            // one greater than pivot
            left = pivot + 1;
        }
    }

    // if we exit the while loop then we didn't find the value
    return false;
}

/* 2.1 Given a string, revers each word in the sentence, maintain the sentence 
 *      order though.
**/
var sentence = "Welcome to this Javascript Guide!";
var result = reverseAll(sentence);

function reverseAll(sentence) {
    // reverse the character order, then reverse the word order
    return sentence.split("").reverse().join("").split(" ").reverse().join(" ");
}

/* 2.2 Given two strings, return true if they are anagrams of one another
**/
var word1 = "Mary",
    word2 = "Army";

var result = isAnagram(word1, word2);

function isAnagram(a, b) {
    // make them lowercase, split to sort then join to compare
    a = a.toLowerCase().split("").sort().join("");
    b = b.toLowerCase().split("").sort().join("");

    return a === b;
}

/* 2.3 Given a string, return true if it is as palindrom
 *      function should be case insensitive and ignore spaces
**/
var word1 = "racecar",
    word2 = "Race Car";

var result = isPalindrom(word1);
var result = isPalindrom(word2);

function isPalindrom(a) {
    a = a.toLowerCase().replace(/\s/g, "");
    var b = a.split("").reverse().join("");
    return a === b;
}


/* 2.4 Given two strings, return true if they are isomorphic. Two strings are
 *      isomorphic if the characters of one can be replaced to get the second.
**/

var pair1 = ["egg", "add"],
    pair2 = ["paper", "title"],
    pair3 = ["kick", "side"];

var result = isIsomorphic(pair1[0], pair1[1]);
var result = isIsomorphic(pair2[0], pair2[1]);
var result = isIsomorphic(pair3[0], pair3[1]);

function isIsomorphic(a, b) {
    // First they must be same length
    if (a.length !== b.length) return false;

    // Next check if all unique characters can be paired using a map
    var pairMap = {};

    for (var i = 0; i < a.length; i++) {
        var letterA = a[i],
            letterB = b[i];

        if (pairMap[letterA] === undefined) {
            // if we havn't came accross this letterA
            // map it's value to the letterB
            pairMap[letterA] = letterB;
        } else if (pairMap[letterA] !== letterB) {
            // if we have came across the letterA and it's value doesn't match
            // the previously paired value letterB then it isn't isomorphic
            return false;
        }
    }
    // if it was able to iterate through the whole string without returning
    // false then all unique values paired up meaning it is isomorphic
    return true;
}

/* 3.1 Implement enqueue and dequeue using only two stacks
 * 
**/

var inStack = [],
    outStack = [];

// For enqueue, push the items into the first stack
function enqueue(stackInput, item) {
    return stackInput.push(item);
}

// For dequeue, if we have an empty outStack we need to populate it in reverse
// order from the inStack that way the first in is first out.
function dequeue(stackInput, stackOuput) {
    if (stackOuput.length <= 0) {
        while(stackInput.length > 0) {
            var elementToOutput = stackInput.pop();
            stackOuput.push(elementToOutput);
        }
    }
    // if we already have values in the outStack, just return the one at the 
    // top of the stack, the way we populate this stack is that the oldest value
    // is always at top. We don't add more values from the inStack until all 
    // values from the outStack have been removed.
    return stackOuput.pop();
}

/* 3.2 Create a function that will evaluate if a given expression has balanced
 *      parentheses -- Using stacks.
**/

var exp1 = "{{}}{}{}",
    exp2 = "{}{{}";

var result = isBalanced(exp1);
var result = isBalanced(exp2);

function isBalanced(exp) {
    // if empty return balanced
    if (exp.length <= 0) return true;

    var stack = [];
    for (var i = 0; i < exp.length; i++) {
        if (exp[i] === '{') {
            stack.push(exp[i]);
        } else if (exp[i] === '}') {
            if (stack.length > 0) stack.pop();
        } else {
            return false;
        }

    }

    if (stack.pop()) return false;
    return true;
}

/* 4.1 Create a recursive function that will return the binary string of given
 *      decimal value.
**/

var result = decToBin(3); 
var result = decToBin(8); 
var result = decToBin(1000); 

function decToBin(dec) {
    // exit condition if value is no longer divisable by 2
    // we return a string at the end to ensure all values are concatenated
    // instead of added
    if (dec < 1) return '';

    // otherwise check for a remainder. We build the string from right to left
    if (dec % 2) {
        // if it has a remainder we take a one and return it as part of the
        // string, remove it from the dec value and continue checking
        return decToBin((dec - 1) / 2) + 1;
    } else {
        // simarly, if no remainder we take a zero and return it as part of
        // the string and continue checking until we can no longer divide
        return decToBin(dec / 2) + 0;
    }
}

/* 4.2 Create a recursive function that will perform a binary search
**/

var array1 = [0, 1, 2, 3, 4, 5, 6];
var array2 = [1, 2, 3, 4, 5, 6];
var array3 = [6, 5, 4, 3, 2, 1, 0];

var result = binSearch(array1, 5, 0, array1.length - 1); 
var result = binSearch(array2, 0, 0, array1.length - 1); 
var result = binSearch(array3, 5, 0, array1.length - 1); 

function binSearch(array, value, left, right) {
    // if it isn't sorted then we exit due to error
    if (left > right) return false;

    var pivot = Math.floor((left + right) / 2);
    if (array[pivot] === value) {
        // Our exit condition is when we have found the value
        return true;
    } else if (value < array[pivot]) {
        // search left of the pivot if value is less than current pivot
        // our right most value should then be pivot - 1
        return binSearch(array, value, left, pivot - 1);
    } else {
        // search right of the pivot if value is greater than current pivot
        // our left most value should then be pivot + 1
        return binSearch(array, value, pivot + 1, right);
    }
}

/* 5.1 Given an integer, determine if it is a power of 2. If so, return that
 *      else return false. (0 is not a power of two)
**/

var result = isPowOfTwo(1); 
var result = isPowOfTwo(4); 
var result = isPowOfTwo(64); 
var result = isPowOfTwo(2048); 
var result = isPowOfTwo(0); 
var result = isPowOfTwo(-1); 

function isPowOfTwo(num) {
    if (num === 0) return false;

    // in binary powers of 2 are represented by 1 followed by an appropriate 
    // amount of 0. If we subtract 1 all those 0s become 1s and the leading 1 
    // becomes 0. This means a bit wise AND should return 0 if it is a power of 
    // 2. The amount of 1s is also the power we need to get the original value

    return ((num & (num - 1)) ===  0) ? findPow(num - 1) : false
}

function findPow(num) {
    // exit condition if value is no longer divisable by 2
    if (num < 1) return 0;

    // else keep adding up the 1s
    return findPow((num - 1) / 2) + 1;
}

