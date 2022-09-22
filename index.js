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

function requestNumberWithPrompt(prompt) {
    var number;
    console.log(prompt);
    number = readline.prompt()
    if (isNaN(number)) {
        console.log("Not a valid number, please try again.");
        return requestNumberWithPrompt(prompt);
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
    return requestNumberWithPrompt('How many numbers do you want to ' + symbolToWordDict[operator] + "?:");
}

function formArray(operator) {
    const quantity = requestQuantity(operator);
    var numbers = [];
    for (let step = 0; step < quantity; step++) {
        numbers.push(requestNumberWithPrompt("Please enter number " + (step+1) + ":"));
    }
    return numbers;
}

function calculateAnswer(operator, numbers) {
    const quantity = numbers.length;
    var answer = numbers[0];
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
        }
        break;
    }
    return answer;
}

function performOneOperation() {
    
    const operator = requestOperator();
    const numbers = formArray(operator);
    const answer = calculateAnswer(operator, numbers);    
    console.log('The answer is ' + answer);
}

function runCalculator() {
    var continueCalculator = true;
    while (continueCalculator) {
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
