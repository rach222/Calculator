const readline = require('readline-sync');
const vowel = require('./vowel');
const arithmetic = require('./arithmetic');
const userInput = require('./userInput');

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================')
}

function printGoodbyeMessage() {
    console.log("Thank you for using the calculator.")
}

function runCalculator() {
    
    var continueCalculator = true;
    
    while (continueCalculator) {
        const calculationMode = userInput.getCalculationMode();
        switch (calculationMode) {
            case 1:
                arithmetic.performOneArithmeticOperation();
                break;
            case 2:
                vowel.performOneVowelCount();
                break;
        }

        continueCalculator = userInput.askContinue();

    }
}

printWelcomeMessage();
runCalculator();
printGoodbyeMessage();
