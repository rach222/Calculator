const readline = require('readline-sync');

console.log('Welcome to the calculator!');
console.log('==========================')

console.log('Please enter an operator:');
const operator = readline.prompt();

if (!(operator == '+' || operator == '-' || operator == '*' || operator == '/')) {
    console.log('Operator not accepted');
    return 1;
}

console.log('Please enter your first number:');
const argument1 = readline.prompt();
const number1 = +argument1;

console.log('Please enter your second number:');
const argument2 = readline.prompt();
const number2 = +argument2;

var answer

switch (operator) {
    case '+':
    answer = number1 + number2;
    break;

    case '*':
    answer = number1 * number2;
    break;

    case '-':
    answer = number1 - number2;
    break;

    case '/':
    answer = number1 / number2;
    break;
}

console.log('The answer is ' + answer);