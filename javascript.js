let x = 0;
let y = 0;
let operator = "";
let displayValue = 0;

let display = document.getElementById("display")
display.innerHTML = displayValue;

function changeDisplayValue(btnText){
    if (display.innerHTML == 0) {
        display.innerHTML = btnText;
        displayValue = btnText;
    } else {
        display.innerHTML += btnText;
        displayValue += btnText;
    }
}

let calcButtons = document.querySelectorAll(".number");

for (let i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener('click', function () {
        changeDisplayValue(calcButtons[i].innerHTML);
    }, false);
}

let operators = document.querySelectorAll(".operator");

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
        x = displayValue;
        operator = operators[i].innerHTML;
        display.innerHTML += operator;
    }, false);
}

let equal = document.querySelector(".equal");

equal.addEventListener("click", function () {
    y = display.innerHTML.slice(x.length+1, display.innerHTML.length);
    display.innerHTML = operate(operator, x, y);
} , false);


function add (x, y) {
    return (x + y);
}

function subtract (x, y) {
    return (x - y);
}

function multiply (x, y) {
    return (x * y);
}

function divide (x, y) {
    return (x / y);
}

function operate (operator, number1, number2) {
    switch(operator) {
        case "-":
            return subtract(number1, number2);
            break;
        case "+":
            return add(number1, number2);
            break;
        case "*":
            return multiply(number1, number2);
            break;
        case "/":
            return divide(number1, number2);
            break;
    }
    
}