function add (number1, number2) {
    return number1 + number2;
}

function subtract (number1, number2) {
    return number1 - number2;
}

function multiply (number1, number2) {
    return number1 * number2;
}

function divide (number1, number2) {
    return number1 / number2;
}

function operate (operator, number1, number2) {
    if (operator === plus) {
        add(number1, number2)
    } else if (operator === minus) {
        subtract(number1, number2);
    } else if (operator === times) {
        multiply(number1, number2);
    } else {
        divide(number1, number2)
    }
}
