// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
//
// describe("fibonacci", () => {
//   it("takes in a number greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
//     expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//   })
// })

//yarn jest, 1 failed, fibonaci is not defined

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.


//input: number
//output: array of numbers

//result will always begin [1,1,2]
// result array will be the length of the input
//create an inital array [1,1,2]
//using for loop and conditional, push current value into initial array
//current value is sum of two previous values


const fibonacci = (num) => {
  var initial = [1, 1, 2]
for (var i = 2; i < initial.length; i++) {
    var currentValue = initial[i - 1] + initial[i - 2]
    initial.push(currentValue)
}
return initial
}

//getting error: Fatal error in , line 0
//# Fatal JavaScript invalid size error 184071938
//error Command failed with signal "SIGTRAP"




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("oddOrdered", () => {
  it("returns a new array of only odd numbers sorted from least to greatest", () => {
    expect(oddOrdered(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(oddOrdered(fullArr2)).toEqual([-823, 7, 23])
  })
})


var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // Expected output: [-9, 7, 9, 199]
//
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

//check each value and return only numbers using filter
//use filter again to have an array of only odd numbers
//use .sort to put the numbers in order from least to greatest
//possible refactor to filter two things at once?

const oddOrdered = (fullArr) => {
  var nums = fullArr.filter(value => (typeof value === 'number') && (value % 2 !== 0))
  // var odds = nums.filter(number => number % 2 !== 0)

  var sorted = nums.sort(function (a, b) {
    return a - b;
  });
  return sorted
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumulator", () => {
  it("returns a new array of only odd numbers sorted from least to greatest", () => {
    expect(accumulator(numbersToAdd1)).toEqual([2, 4, 45, 9])
    expect(accumulator(numbersToAdd2)).toEqual([0, 7, -8, 12])
    expect(accumulator(numbersToAdd3)).toEqual([])
  })
})

var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]
//
var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]
//
var numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.
// create result array

//edge case: if [] return []
//use for loop to iterate over input array
//can also use .map
//if index = 0 push current value
//else push current value + previous value

const accumulator = (arr) => {

  var sum = arr.map(value, index => {

    var previousIndex = index - 1;

      if (index === 0) {
      return value;
    } else {
      return value + value[previousIndex];
    }

  }
  return sum;
}
//getting FAIL, Test suite failed to Run
//Also, Unexpected token, expected ","
