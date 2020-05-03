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
  writeToLog("ADD", initialResult, enertedNumber, currentResult);
}

function multiply() {
  const enertedNumber = getUserNumberEntered();
  const initialResult = currentResult;
  currentResult *= enertedNumber;
  createAndWriteOutput("*", initialResult, enertedNumber);
  writeToLog("MULTIPLY", initialResult, enertedNumber, currentResult);
}

function subtract() {
  const enertedNumber = getUserNumberEntered();
  const initialResult = currentResult;
  currentResult -= enertedNumber;
  createAndWriteOutput("-", initialResult, enertedNumber);
  writeToLog("SUBTRACT", initialResult, enertedNumber, currentResult);
}

function divide() {
  const enertedNumber = getUserNumberEntered();
  const initialResult = currentResult;
  currentResult /= enertedNumber;
  createAndWriteOutput("/", initialResult, enertedNumber);
  writeToLog("DIVIDE", initialResult, enertedNumber, currentResult);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };

  console.log(logEntry);
}
