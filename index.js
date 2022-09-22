const readline = require('readline-sync');

const symbolToWordDict = {
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "/": "divide",
}
function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================')
}

function requestNumber(index = 0) {
    var number;
    if (index>0) {
    console.log("Please enter number " + index + ":");
    number = readline.prompt()
    }
    else {
    console.log("Please enter number:");
    number = readline.prompt()
    }

    if (isNaN(number)) {
        console.log("Not a valid number, please try again.");
        return requestNumber(index);
    }

    return number;
}

function requestOperator(){
    console.log('Please enter an operator:');
    const operator = readline.prompt();
    
    if (!(operator == '+' || operator == '-' || operator == '*' || operator == '/')) {
    console.log('Operator not accepted, try again.');
    return requestOperator();
    }
    return operator;
}

function requestQuantity(operator) {
    console.log('How many numbers do you want to ' + symbolToWordDict[operator] + "?");
    return requestNumber();
    
}

function formArray(quantity) {
    var numbers = [];

    for (let step = 0; step < quantity; step++) {
        numbers.push(requestNumber(step+1));
    }

    return numbers;
}

function calculateAnswer(operator, numbers, quantity) {
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
    
    return answer;
}

function performOneOperation() {
    
    let operator = requestOperator();

    let quantity = requestQuantity(operator);

    let numbers = formArray(quantity);

    let answer = calculateAnswer(operator, numbers, quantity);    

    console.log('The answer is ' + answer);
}

function runCalculator() {
    var continueCalculator = true;

    while (continueCalculator === true) {
        performOneOperation();
        console.log("Do you want to perform another calculation? (y/n)");
        let response = readline.prompt();
        if (!(response == "y" || response == "Y")) {
            continueCalculator = false;
        }
    }
}

function printGoodbyeMessage() {
    console.log("Thank you for using the calculator.")
}

printWelcomeMessage();
runCalculator();
printGoodbyeMessage();
