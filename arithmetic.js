const userInput = require('./userInput');

function formArray(operator) {
    const quantity = userInput.requestQuantity(operator);
    var numbers = [];
    for (let step = 0; step < quantity; step++) {
        numbers.push(userInput.requestNumberWithPrompt(`Please enter number ${step+1}:`));
    }
    return numbers;
}

function calculateAnswer(operator, numbers) {
    var answer;
    switch (operator) {
        case '+':
            answer = numbers.reduce((previousValue,currentValue) => previousValue + currentValue);
        break;

        case '*':
            answer = numbers.reduce((previousValue,currentValue) => previousValue * currentValue);
        break;

        case '-':
            answer = numbers.reduce((previousValue,currentValue) => previousValue - currentValue);
        break;

        case '/':
            answer = numbers.filter((number) => number !== 0).reduce((previousValue,currentValue) => previousValue / currentValue);        
        break;
    }
    return answer;
}

exports.performOneArithmeticOperation = function() {
    const operator = userInput.requestOperator();
    const numbers = formArray(operator);
    const answer = calculateAnswer(operator, numbers);    
    console.log(`The answer is ${answer}.`);
}