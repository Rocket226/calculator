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
    if (b == 0) {
        alert("You can't divide by zero")
        return a;
    }
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

    let result = operate(operator, Number(secondaryNumber), primaryNumber);
    let decimalPlaces = Math.max(15 - String(Math.round(result)).length, 0)

    primaryNumber = roundNumber(result, decimalPlaces)


}

function roundNumber(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
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
            if (String(primaryNumber).length >= 16) return;
            primaryNumber += id;
            if (id != "0") primaryNumber = Number(primaryNumber);
            if (primaryNumber == "00") primaryNumber = "0"
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
            if (String(primaryNumber).length >= 15) return;
            primaryNumber += '.'
            screenPrimary.textContent = primaryNumber;
        }
    });
});

