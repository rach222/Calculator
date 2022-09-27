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

function printGoodbyeMessage() {
    console.log("Thank you for using the calculator.")
}

function requestNumberWithPrompt(prompt) {
    console.log(prompt);
    var number = readline.prompt();
    if (isNaN(+number)) {
        console.log(`${number} is not a valid number, please try again.`);
        return requestNumberWithPrompt(prompt);
    }
    return +number;
}

function requestStringWithPrompt(prompt) {
    console.log(prompt);
    var string = readline.prompt();
    return string;
}

function requestOperator(){
    const operator = requestStringWithPrompt('Please enter an operator:');
    
    if (!(operator in symbolToWordDict)) {
    console.log('Operator not accepted, try again.');
    return requestOperator();
    }
    return operator;
}

function requestQuantity(operator) {
    return requestNumberWithPrompt(`How many numbers do you want to ${symbolToWordDict[operator]}?:`);
}

function formArray(operator) {
    const quantity = requestQuantity(operator);
    var numbers = [];
    for (let step = 0; step < quantity; step++) {
        numbers.push(requestNumberWithPrompt(`Please enter number ${step+1}:`));
    }
    return numbers;
}

function calculateAnswer(operator, numbers) {
    var answer = numbers[0];
    for (let step = 1; step < numbers.length; step++) {
    switch (operator) {
        case '+':
            answer += +numbers[step];
        
        break;

        case '*':
            answer *= +numbers[step];
        
        break;

        case '-':
            answer -= +numbers[step];
        
        break;

        case '/':
            answer /= +numbers[step];
        
        break;
    }
    }
    return answer;
}

function performOneArithmeticOperation() {
    const operator = requestOperator();
    const numbers = formArray(operator);
    const answer = calculateAnswer(operator, numbers);    
    console.log(`The answer is ${answer}.`);
}

function getCalculationMode() {
    const mode = requestNumberWithPrompt("Which mode do you want to use? \n1)Arithmetic\n2)Vowel Counting");
    if (mode === 1 || mode ===2) {
        return mode;
    }
    else {
        console.log('Number not accepted, enter 1 or 2.')
        getCalculationMode();
    }
}

function askContinue() {
    const response = requestStringWithPrompt("Do you want to perform another calculation? (y/n)");
    if (!(response == "y" || response == "Y")) {
        return false;
    }
    else {
        return true;
    }
}

function performOneVowelCount() {
    const string = requestStringWithPrompt("Please enter string to be counted:");
    const count = {'A':0, 'E':0, 'I':0, 'O':0, 'U':0};
    for (var idx=0; idx<string.length; idx++) {
        if (string[idx].toUpperCase() in count) {
            count[string[idx].toUpperCase()]++;
        }
    }
    console.log(count);
}

function runCalculator() {
    
    var continueCalculator = true;
    
    while (continueCalculator) {
        const calculationMode = getCalculationMode();
        switch (calculationMode) {
            case 1:
                performOneArithmeticOperation();
                break;
            case 2:
                performOneVowelCount();
                break;
        }

        continueCalculator = askContinue();

    }
}

printWelcomeMessage();
runCalculator();
printGoodbyeMessage();
