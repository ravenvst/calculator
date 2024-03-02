let x = 0;
let y = 0;
let operator = "";
let displayValue = 0;

let display2 = document.getElementById("display2")
display2.innerHTML = displayValue;

function changeDisplayValue(btnText){
    if (display2.innerHTML == 0) {
        display2.innerHTML = btnText;
        displayValue = btnText;
    } else {
        display2.innerHTML += btnText;
        displayValue += btnText;
    }
}

let calcButtons = document.querySelectorAll(".number");

for (let i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener('click', function () {
        changeDisplayValue(calcButtons[i].innerHTML);
        if (operator != "") {
            y = +display2.innerHTML.slice(x.toString.length + 1, display2.innerHTML.length);
        }
    }, false);
}

let operators = document.querySelectorAll(".operator");

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
        if (operator === "") {
            x = displayValue;
            operator = operators[i].innerHTML;
            display2.innerHTML += operator;
        } else {
            
            display1.innerHTML = display2.innerHTML;
            
            y = +display2.innerHTML.slice(x.length+1, display2.innerHTML.length);
            
            x = +operate(operator, +x, +y);
            operator = operators[i].innerHTML;
            display2.innerHTML = x + operator;
        }
    }, false);
}

let equal = document.querySelector(".equal");

equal.addEventListener("click", function () {
    if (typeof(x) == String) {
        y = +display2.innerHTML.slice(x.length+1, display2.innerHTML.length);
    } else {
        y = +display2.innerHTML.slice(x.toString.length+1, display2.innerHTML.length);
    }
    display2.innerHTML = operate(operator, x, y);
} , false);


function add (x, y) {
    return (+x + +y);
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