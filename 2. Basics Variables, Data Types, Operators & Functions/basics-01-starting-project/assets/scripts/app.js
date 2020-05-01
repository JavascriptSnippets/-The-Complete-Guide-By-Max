const defaultResult = 0;
let currentResult = defaultResult;

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

function getUserNumberEntered() {
    return parseInt(userInput.value);
}

function add() {
    const enertedNumber = getUserNumberEntered();
    const initialResult = currentResult;
    currentResult += enertedNumber;
    createAndWriteOutput("+", initialResult, enertedNumber);
}

function multiply() {
    const enertedNumber = getUserNumberEntered();
    const initialResult = currentResult;
    currentResult *= enertedNumber;
    createAndWriteOutput("*", initialResult, enertedNumber);
}

function subtract() {
    const enertedNumber = getUserNumberEntered();
    const initialResult = currentResult;
    currentResult -= enertedNumber;
    createAndWriteOutput("-", initialResult, enertedNumber);
}

function divide() {
    const enertedNumber = getUserNumberEntered();
    const initialResult = currentResult;
    currentResult /= enertedNumber;
    createAndWriteOutput("/", initialResult, enertedNumber);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}