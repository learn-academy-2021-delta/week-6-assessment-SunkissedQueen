// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a describe method that lists the name of the function as "grammarBam"
// an it method that describes the function takes in an array of objects and returns an array with a sentence about each person with their name capitalized
//an expect method calling on the completeThough() function, followed by the .toEqual() matcher that checks the expected output of the function return
//Let's go forth and fail

// a) Create a test with an expect statement using the variable provided.
describe("grammarBam", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    var people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(grammarBam(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

//Failing it, and failing it, and failing it well.


// b) Create the function that makes the test pass.
// Time to make it pass
// Declare grammarBam() and pass a parameter of array
// First off I need to get to those values. At each index in the array is an object. Use a variable to hold those values from the object. nameArr, use dot notation to access the name values, and used .map to iterate
//Research how to capitalize the first letter of the name with regex..join to make a string to use replace with regex then split into an array, save in variable cap
// variable job saves the occupation obtained through dot notation, and used .map to iterate
// research a zip technique to allow string interpolation with these values, saved with variable info, and used .map to iterate
//Problem have to remove whitespace in front of the statements..used trim method on array...variable what, and used .map to iterate

const grammarBam = (array) => {
  let nameArr = array.map(obj => obj.name);
  let cap = nameArr.join(", ")
    .replace(/(^\w{1})|(\s+\w{1})/g, letter =>
    letter.toUpperCase()).split(",");
  let job = array.map(obj => obj.occupation);
  let info = cap.map((name, i) => `${name} is ${job[i]}.`);
  let what = info.map(element =>
    element.trim());
  return what
};
 //This passed. I will continue to research how to make this more dynamic to take on any values in the object.


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a describe method that lists the name of the function as "threesCompany"
// an it method that describes the function takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3
//an expect method calling on the threesCompany() function, followed by the .toEqual() matcher that checks the expected output of the function return
//I smell some failure in the air.

// a) Create a test with an expect statement using the variables provided.

describe("threesCompany", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(threesCompany(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(threesCompany(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
//Another failure!

// b) Create the function that makes the test pass.
//declare threesCompany function with array as parameter
//used a one liner
//filter the value of the array, using typeof to determine if value is considered a number and then iterate across those values to produce the remainder of dividing each by three %3

const threesCompany = (array) => {
  return array
    .filter(value => typeof value === "number")
    .map(value => value%3);
};
 //The light is green.


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a describe method that lists the name of the function as "sumCubed"
// an it method that describes the function takes in an array of numbers and returns the sum of all the numbers cubed
//an expect method calling on the sumCubed() function, followed by the .toEqual() matcher that checks the expected output of the function return
//Let's see if there is some failure in the cabinet.

// a) Create a test with an expect statement using the variables provided.
describe("sumCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
  var cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  var cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125
      expect(sumCubed(cubeAndSum1)).toEqual(99)
      expect(sumCubed(cubeAndSum2)).toEqual(1125)
    })
})
//Hello failure!

// b) Create the function that makes the test pass.
// declare sumCubed with a parameter of array
// one liner
// use map to iterate the cubing of each value and then use reduce to add each value

const sumCubed = (array) => {
  return array
    .map(value => value**3)
    .reduce((a, b) => a + b);
}
//Howdy passing!
