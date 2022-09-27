const readline = require('readline-sync');

const symbolToWordDict = {
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "/": "divide",
}

function requestStringWithPrompt(prompt) {
    console.log(prompt);
    var string = readline.prompt();
    return string;
}

exports.requestStringWithPrompt = requestStringWithPrompt;

exports.requestQuantity = function(operator) {
    return requestNumberWithPrompt(`How many numbers do you want to ${symbolToWordDict[operator]}?:`);
}

function requestOperator() {
    const operator = requestStringWithPrompt('Please enter an operator:');
    
    if (!(operator in symbolToWordDict)) {
    console.log('Operator not accepted, try again.');
    return requestOperator();
    }
    return operator;
}

exports.requestOperator = requestOperator;

function requestNumberWithPrompt(prompt) {
    console.log(prompt);
    var number = readline.prompt();
    if (isNaN(+number)) {
        console.log(`${number} is not a valid number, please try again.`);
        return requestNumberWithPrompt(prompt);
    }
    return +number;
}

exports.requestNumberWithPrompt = requestNumberWithPrompt;

exports.getCalculationMode = function() {
    const mode = requestNumberWithPrompt("Which mode do you want to use? \n1)Arithmetic\n2)Vowel Counting");
    if (mode === 1 || mode ===2) {
        return mode;
    }
    else {
        console.log('Number not accepted, enter 1 or 2.')
        getCalculationMode();
    }
}

exports.askContinue = function() {
    const response = requestStringWithPrompt("Do you want to perform another calculation? (y/n)");
    if (!(response == "y" || response == "Y")) {
        return false;
    }
    else {
        return true;
    }
}
