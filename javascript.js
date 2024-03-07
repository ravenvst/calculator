let x = 0;
let y = 0;
let operator = "";
let displayValue = 0;
let result; 
let opCount = 0;
let usedEqual = false;

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
            y = +display2.innerHTML.slice(x.toString().length + 1, display2.innerHTML.length);
        }
    }, false);
}

let dot = document.querySelector(".dot");
dot.addEventListener("click", function () {
    if (display2.innerHTML.includes(".") == false){
    display2.innerHTML += ".";
    displayValue = display2.innerHTML;
    } else if (opCount > 0 && y.toString().includes(".") == false) {
        display2.innerHTML += ".";
    }
});


let operators = document.querySelectorAll(".operator");

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {
        if (operator === "/" && y == 0) {
            display1.innerHTML = "";
            display2.innerHTML = "NOPE :D";
        } else {
            opCount ++;
            if (display2.innerHTML.slice(x.toString().length, display2.innerHTML.length) !== "*" &&
                display2.innerHTML.slice(x.toString().length, display2.innerHTML.length) !== "/" &&
                display2.innerHTML.slice(x.toString().length, display2.innerHTML.length) !== "+" &&
                display2.innerHTML.slice(x.toString().length, display2.innerHTML.length) !== "-" 
            ) {
                if (operator === "") {
                    x = displayValue;
                    operator = operators[i].innerHTML;
                    display2.innerHTML += operator;
                } else {
                    if (display1.innerHTML == "") {
                        display1.innerHTML = display2.innerHTML;
                    } else {
                        if (usedEqual === false) {
                            display1.innerHTML += operator + y;
                        }
                    }
                    if (usedEqual === false) {
                        if (typeof(x) == "string") {
                        y = +display2.innerHTML.slice(x.length+1, display2.innerHTML.length);
                        } else {
                        y = +display2.innerHTML.slice(x.toString().length+1, display2.innerHTML.length);
                        }
                    }
                    x = +operate(operator, +x, +y);
                    operator = operators[i].innerHTML;
                    display2.innerHTML = x + operator;
                
                }
            }
        }
    }, false);
usedEqual = false;
}

let equal = document.querySelector(".equal");

equal.addEventListener("click", function () {
    if (operator === "/" && y == 0) {
        display1.innerHTML = "";
        display2.innerHTML = "NOPE :D";
    } else {
        usedEqual = true;
        if (display2.innerHTML.slice(x.toString().length+1, display2.innerHTML.length) != ""){
            if (typeof(x) == String) {
                y = +display2.innerHTML.slice(x.length+1, display2.innerHTML.length);
            } else {
                y = +display2.innerHTML.slice(x.toString().length+1, display2.innerHTML.length);
            }

            result = operate(operator, x, y);
            if (Number.isInteger(result)) {
                display2.innerHTML = operate(operator, x, y);
            } else {
                display2.innerHTML = operate(operator, x, y).toFixed(2);
            }

            if (opCount === 1) {
                display1.innerHTML += x;
            }
            display1.innerHTML += operator + y;
        }
    }

} , false);

let buttonClear = document.querySelector(".clear");
buttonClear.addEventListener("click", clear);



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

function clear () {
    display1.innerHTML = "";
    display2.innerHTML = 0;
    x = 0;
    y = 0;
    operator = "";
    opCount = 0;
    displayValue = 0;
    usedEqual = false;
}