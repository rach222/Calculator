const readline = require('readline-sync');

const symbolToWordDict = {
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "/": "divide",
}

console.log('Welcome to the calculator!');
console.log('==========================')

console.log('Please enter an operator:');
const operator = readline.prompt();

if (!(operator == '+' || operator == '-' || operator == '*' || operator == '/')) {
    console.log('Operator not accepted');
    return 1;
}

console.log('How many numbers do you want to ' + symbolToWordDict[operator] + "?");
const quantity = +readline.prompt();

var numbers = [];

for (let step = 0; step < quantity; step++) {
    console.log("Please enter number " + (step+1) + ":");
    numbers.push(readline.prompt());
}

var answer = numbers[0]

switch (operator) {
    case '+':
    for (let step = 1; step < quantity; step++) {
        answer += +numbers[step];
    }
    break;

    case '*':
    for (let step = 1; step < quantity; step++) {
        answer *= +numbers[step];
    }
    break;

    case '-':
    for (let step = 1; step < quantity; step++) {
        answer -= +numbers[step];
    }
    break;

    case '/':
    for (let step = 1; step < quantity; step++) {
        answer /= +numbers[step];
        console.log(answer);
    }
    break;
}

console.log('The answer is ' + answer);