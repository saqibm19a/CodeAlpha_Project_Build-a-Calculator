let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (displayValue && !isNaN(displayValue[displayValue.length - 1])) {
        displayValue += operator;
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
