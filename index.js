const readline = require('readline-sync');

console.log('Welcome to the calculator!');

console.log('Please enter your first number:');
const var1 = parseFloat(readline.prompt());

console.log('Please enter your second number:');
const var2 = parseFloat(readline.prompt());

console.log('The product of ' + var1 +' and ' + var2 + ' is ' + var1*var2);