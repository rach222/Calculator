const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('===========================')

console.log('Please enter your first number:');
const argument1 = readline.prompt();
const number1 = +argument1;

console.log('Please enter your second number:');
const argument2 = readline.prompt();
const number2 = +argument2;

const answer = number1 * number2

console.log('The product of ' + number1 +' and ' + number2 + ' is ' + answer);