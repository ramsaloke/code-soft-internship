// Get reference to the display input element
const display = document.querySelector('input[name="display"]');

// Function to clear the display
function clearDisplay() {
    display.value = '00';
}

// Function to delete the last character from display
function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

// Function to append a decimal point to the display
function appendDecimal() {
    display.value += '.';
}

// Function to append a character to the display
function appendCharacter(char) {
    // Clear the display if it currently shows "00"
    if (display.value === '00') {
        display.value = '';
    }
    display.value += char;
}

// Function to evaluate the expression in the display
function evaluateExpression() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
