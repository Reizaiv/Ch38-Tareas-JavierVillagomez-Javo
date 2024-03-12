/*
Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

const arrEx2 = [1,2,3,4,5];

const doubleArr = (element) => element*2;

const doubleArrEx2 = arrEx2.map(doubleArr);
console.log(doubleArrEx2.map(element => console.log(element)));