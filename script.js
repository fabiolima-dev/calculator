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
    let result;
    if (operator === "+") {
        result = add(number1, number2)
    } else if (operator === "-") {
        result = subtract(number1, number2);
    } else if (operator === "×") {
        result = multiply(number1, number2);
    } else {
        result = divide(number1, number2)
    }
    displayValue = result;
    displayValue2 = null;
    operatorCounter = 0;
    operationDone = 1;
    clear = 0;
    return parseFloat(result.toFixed(5));
}

function setDisplayValue (number) {
    if (operationDone === 1) {
        displayValue = null;
        screenNumber.innerHTML = "";
        operationDone = 0;
    }
    if (operatorCounter === 0) {
        if (screenNumber.innerHTML.length < 16) {
            screenNumber.innerHTML += `${number}`
            if (displayValue) {
                displayValue += `${number}`;
            } else {
                displayValue = `${number}`;
            }
        }
    } else if (operatorCounter === 1) {
        if (clear === 0) {
            screenNumber.innerHTML = "";
            clear++;
        }
        if (screenNumber.innerHTML.length < 16) {
            screenNumber.innerHTML += `${number}`
            if (displayValue2) {
                displayValue2 += `${number}`;
            } else {
                displayValue2 = `${number}`;
            }
        }
    }
}

function operatorAssign (newOperator) {
    if (operatorCounter === 0) {
        operator = newOperator;
        operatorCounter++;
        operationDone = 0;
    } else if (operatorCounter === 1) {
        if (displayValue2) {
            screenNumber.innerHTML = operate(operator, parseFloat(displayValue), parseFloat(displayValue2));
            operator = newOperator;
            operatorCounter++;
            operationDone = 0;
        }
    }
}

const screenNumber = document.querySelector("#number")

const zero = document.querySelector("#zero")

const one = document.querySelector("#one")

const two = document.querySelector("#two")

const three = document.querySelector("#three")

const four = document.querySelector("#four")

const five = document.querySelector("#five")

const six = document.querySelector("#six")

const seven = document.querySelector("#seven")

const eight = document.querySelector("#eight")

const nine = document.querySelector("#nine")

const dot = document.querySelector("#dot")

const plus = document.querySelector("#plus")

const minus = document.querySelector("#minus")

const times = document.querySelector("#multiply")

const division = document.querySelector("#division")

const equal = document.querySelector("#equal")

const clean = document.querySelector("#clear")

const del = document.querySelector("#del")

let displayValue;

let displayValue2;

let operator;

let operatorCounter = 0;

let operationDone = 0;

let clear = 0;

const numbers = [zero, one, two, three, four, five, six, seven, eight, nine]

numbers.forEach(function (number, index) {
    number.onclick = () => {
        if (operator === "÷" && index === 0) {
            alert("Is not possible divide by zero!")
        } else {
            setDisplayValue(index)
        }
    }
})

dot.onclick = () => {
    setDisplayValue(".")
}

plus.onclick = () => {
    operatorAssign(plus.innerHTML);
}

minus.onclick = () => {
    operatorAssign(minus.innerHTML);
}

times.onclick = () => {
    operatorAssign(times.innerHTML);
}

division.onclick = () => {
    operatorAssign(division.innerHTML);
}

equal.onclick = () => {
    if (displayValue && displayValue2 && operator) {
        screenNumber.innerHTML = operate(operator, parseFloat(displayValue), parseFloat(displayValue2));
    }
}

clean.onclick = () => {
    screenNumber.innerHTML = ""
    displayValue = null;
    displayValue2 = null;
    operator = null;
    operatorCounter = 0;
    operationDone = 0;
    clear = 0;
}

del.onclick = () => {
    screenNumber.innerHTML = screenNumber.innerHTML.slice(0, -1)
    if (operatorCounter === 0) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue2 = displayValue2.slice(0, -1);
    }
}

document.addEventListener('keydown', (event) => {
    if (numbers[event.key]){
        if (operator === "÷" && event.key === 0) {
            alert("Is not possible divide by zero!")
        } else {
            setDisplayValue(event.key)
        }
    } else if (event.key === ".") {
        setDisplayValue(".")
    } else if (event.key === "+") {
        operatorAssign(plus.innerHTML);
    } else if (event.key === "-") {
        operatorAssign(minus.innerHTML);
    } else if (event.key === "*") {
        operatorAssign(times.innerHTML);
    } else if (event.key === "/") {
        operatorAssign(division.innerHTML);
    } else if (event.key === "=" || event.key === "Enter") {
        if (displayValue && displayValue2 && operator) {
            screenNumber.innerHTML = operate(operator, parseFloat(displayValue), parseFloat(displayValue2));
        }
    } else if (event.code === "KeyC") {
        screenNumber.innerHTML = ""
        displayValue = null;
        displayValue2 = null;
        operator = null;
        operatorCounter = 0;
        operationDone = 0;
        clear = 0;
    } else if (event.key === "Backspace") {
        screenNumber.innerHTML = screenNumber.innerHTML.slice(0, -1)
        if (operatorCounter === 0) {
            displayValue = displayValue.slice(0, -1);
        } else {
            displayValue2 = displayValue2.slice(0, -1);
        }
    }
})