import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// const newNums = numbers.map(function (x) {
//   return x * 2;
// });

// console.log(newNums);

////////////////////////////////////////////////////////////////////////////////////
//Filter - Create a new array by keeping the items that return true.

// const newNums = numbers.filter(function (num) {
//   return num > 10;
// });

// var newNumbers = [];
// numbers.forEach(function (num) {
//   if (num > 10) {
//     newNumbers.push(num);
//   }
// });

// console.log(newNumbers);

/////////////////////////////////////////////////////////////////////////////////////
//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = 0;
// numbers.forEach(function (currentNum) {
//   newNumber += currentNum;
// });

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   return accumulator + currentNumber;
// });

// console.log(newNumber);

//////////////////////////////////////////////////////////////////////////////////////
//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
//   return num > 10;
// });

// console.log(newNumber);

///////////////////////////////////////////////////////////////////////////////////////
//FindIndex - find the index of the first item that matches.

// const indexFound = numbers.findIndex(function (num) {
//   return num > 10;
// });

// console.log(indexFound);

//////////////////////////////////////////////////////////////////////////////////////
// CHALLENGE

const newEmojipedia = emojipedia.map(function (Entry) {
  return Entry.meaning.substring(0, 100);
});

console.log(newEmojipedia);
