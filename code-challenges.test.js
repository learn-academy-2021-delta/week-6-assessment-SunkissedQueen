// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// describe("", () => {
//   it("", () => {
//     expect(()).toEqual()
//   })
// })

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
// First off I need to get to those values which are stored inside an object within the array. At each index in the array is an object. Use a variable to hold those values from the object.
//Object.value converts object’s values into an array of values, the forEach() array method can be used to iterate through the values. May have to create a variable to store this change. This became a bit lengthy..so research a different method. Using map method with new
// Use string interpolation with these values.

var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
];
const grammarBam = (array) => {
  let nameArr = array.map(obj => obj.name);//turns names in an array
  // let capName = nameArr.join(",").split(" ").map((word) => {
  //   return word[0].toUpperCase() + word.substring(1);
  // }).join(" ");
  // replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  let arrWord = nameArr.join(" ").split(" ").map(g => g.charAt(0).toUpperCase() + g.slice(1));//turn into string and back into an array to allow first/last name can be capitalized
  // let newW = arrWord.join(" ");
  let occArr = array.map(obj => obj.occupation);//turns occupations into arrays
  // return `${arrWord[0]} ${arrWord[1]} is ${occArr[0]}.`
  let string = [`${arrWord.shift()} ${arrWord.shift()} is ${occArr.shift()}.`, `${arrWord.shift()} ${arrWord.shift()} is ${occArr.shift()}.`, `${arrWord.shift()} ${arrWord.shift()} is ${occArr.shift()}.`]//I could npt figure out how to map this across the separate arrays
  return string
};

// This passed...but I am disappointed because I could not figure out how to make it more general and dynamic to take in any type of key:value pairs.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

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


// b) Create the function that makes the test pass.
const threesCompany = (array) => {
  let triFactor = array.filter(value => typeof value === "number").map(value => value%3);
  return triFactor
};


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

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



// b) Create the function that makes the test pass.
const sumCubed = (array) => {
  let cubed = array.map(value => value**3)
  let third = cubed.reduce((a, b) => a + b);
  return third
}
