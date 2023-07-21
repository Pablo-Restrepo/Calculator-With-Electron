let currentExpression = '';
let resultDisplay = '';
const displayElement = document.getElementById('problem');
const displayElementResult = document.getElementById('result');

function updateDisplayProblem() {
    displayElement.innerText = currentExpression;
}

function updateDisplayResult() {
    displayElementResult.innerText = resultDisplay;
}

function appendNumber(number) {
    if (currentExpression[0] == 0) {
        currentExpression = '';
    }
    currentExpression += number;
    updateDisplayProblem();
}

function clearDisplay() {
    currentExpression = '0';
    resultDisplay = '0';
    updateDisplayProblem();
    updateDisplayResult();
}

function deleteLastCharacter() {
    if (currentExpression.length === 1) {
        currentExpression = '0';
        updateDisplayProblem();
        return;
    }
    currentExpression = currentExpression.slice(0, -1);
    updateDisplayProblem();
}

function calculate() {
    try {
        const result = eval(currentExpression);
        resultDisplay = result.toString();
        updateDisplayResult();
    } catch (error) {
        currentExpression = 'Error';
        updateDisplayResult();
    }
}