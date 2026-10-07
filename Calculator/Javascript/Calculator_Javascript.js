const screen = document.getElementById('screen');

// Append numbers or operators to the display safely
function appendCharacter(val) {
    const lastChar = screen.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    // Prevent starting with an operator (except minus)
    if (screen.value === '' && operators.includes(val) && val !== '-') {
        return;
    }

    // Prevent duplicate consecutive operators
    if (operators.includes(lastChar) && operators.includes(val)) {
        screen.value = screen.value.slice(0, -1) + val;
        return;
    }

    // Prevent multiple decimals in a single number segment
    if (val === '.') {
        const parts = screen.value.split(/[\+\-\*\/]/);
        const currentNumber = parts[parts.length - 1];
        if (currentNumber.includes('.')) {
            return;
        }
    }

    screen.value += val;
}

// Clear the entire screen
function clearScreen() {
    screen.value = '';
}

// Delete the last entered character
function deleteChar() {
    screen.value = screen.value.slice(0, -1);
}

// Calculate and display the result
function calculateResult() {
    if (!screen.value.trim()) return;

    try {
        // Prevent division by zero error string
        if (screen.value.includes('/0')) {
            throw new Error('Division by zero');
        }

        // Safely evaluate the mathematical expression
        const result = Function('"use strict"; return (' + screen.value + ')')();
        
        // Handle floating point precision issues (e.g. 0.1 + 0.2)
        screen.value = Number.isInteger(result) ? result : parseFloat(result.toFixed(8));
    } catch (error) {
        screen.value = 'Error';
        setTimeout(clearScreen, 1500);
    }
}

// Add Keyboard Support
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        appendCharacter(key);
    } else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculateResult();
    } else if (key === 'Backspace') {
        deleteChar();
    } else if (key === 'Escape') {
        clearScreen();
    }
});