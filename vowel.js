const userInput = require('./userInput');

exports.performOneVowelCount = function() {
    const string = userInput.requestStringWithPrompt("Please enter string to be counted:");
    const vowelCount = {'A':0, 'E':0, 'I':0, 'O':0, 'U':0};
    for (var idx=0; idx<string.length; idx++) {
        if (string[idx].toUpperCase() in vowelCount) {
            vowelCount[string[idx].toUpperCase()]++;
        }
    }
    console.log(vowelCount);
}