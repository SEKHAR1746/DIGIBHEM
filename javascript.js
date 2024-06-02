let displayValue = '0';
let operator = '';
let firstOperand = 0;

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function operate(op) {
    operator = op;
    firstOperand = parseFloat(displayValue);
    displayValue = '0';
}

function calculate() {
    let secondOperand = parseFloat(displayValue);
    let result = 0;
    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
    }
    displayValue = result.toString();
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}