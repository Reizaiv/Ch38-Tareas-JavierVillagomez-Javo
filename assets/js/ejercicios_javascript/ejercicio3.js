/*
Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

const arrEx3 = [1,2,3,4];

const sumaArray = arrEx3.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sumaArray);
const multiArray = arrEx3.reduce((accumulator, currentValue) => accumulator * currentValue)
console.log(multiArray);