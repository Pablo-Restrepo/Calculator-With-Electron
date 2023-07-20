let currentExpression = '';
const displayElement = document.getElementById('display');

function updateDisplay() {
    displayElement.innerText = currentExpression;
}

function appendNumber(number) {
    currentExpression += number;
    updateDisplay();
}

function clearDisplay() {
    currentExpression = '';
    updateDisplay();
}

function deleteLastCharacter() {
    currentExpression = currentExpression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentExpression);
        currentExpression = result.toString();
        updateDisplay();
    } catch (error) {
        currentExpression = 'Error';
        updateDisplay();
    }
}