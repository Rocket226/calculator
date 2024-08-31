function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(operator, a, b) {
    switch (operator) {
        case "add":
            return add(a, b);
        case "sub":
            return subtract(a, b);
        case "mul":
            return multiply(a, b);
        case "div":
            return divide(a, b);
    };
};

function equate() {
    primaryNumber = Number(primaryNumber)
    if (operator == "") return
    primaryNumber = operate(operator, Number(secondaryNumber), primaryNumber);
}

const buttons = document.querySelectorAll(".button");
const screenPrimary = document.querySelector("#primary-display");
const screenSecondary = document.querySelector("#secondary-display");

const operatorASCII = {
    add: "+",
    sub: "-",
    mul: "×",
    div: "/"
};

let operator = "";
let primaryNumber = "";
let secondaryNumber = "";

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        element = event.target;
        let id = element.id.replace("_","");
        if (element.classList.contains("number")) {
            primaryNumber += id;
            primaryNumber = primaryNumber;
            screenPrimary.textContent = primaryNumber;
        } else if (element.classList.contains("function")) {
            if (primaryNumber == "") return;
            equate();
            operator = element.id;
            secondaryNumber = primaryNumber;
            primaryNumber = "";
            screenPrimary.textContent = primaryNumber;
            screenSecondary.textContent = secondaryNumber + " " + operatorASCII[operator];
        } else if (element.classList.contains("equate")) {
            equate();
            secondaryNumber = "";
            operator = "";
            screenPrimary.textContent = primaryNumber;
            screenSecondary.textContent = secondaryNumber;
        } else if (element.classList.contains("clear")) {
            operator = "";
            primaryNumber = "";
            secondaryNumber = "";
            screenPrimary.textContent = primaryNumber;
            screenSecondary.textContent = secondaryNumber;
        } else if (element.classList.contains("delete")) {
            primaryNumber = String(primaryNumber).slice(0, -1)
            screenPrimary.textContent = primaryNumber;
        } else if (element.classList.contains("decimal")) {
            if (String(primaryNumber).includes('.')) return
            primaryNumber += '.'
            screenPrimary.textContent = primaryNumber;
        }
    });
});

