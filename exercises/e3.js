// EXERCISE 3
// Make sure to solve two parts beneath

/**
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  // Your code goes here...
  const sum = 0;
  const lengthOfArray = array.length;
  const result = 0;

  for (const i = 0; i < array.length; i++) {
    sum = array[i] + sum;
  }
  result = sum / lengthOfArray;

  return result;
}

/**
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */

export function getStringSum(str) {
  // Your code goes here...
  const sum = 0;

  for (let x of str) {
    if (!isNaN(x)) {
      sum = parseInt(x) + sum;
    }
  }

  return sum;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
