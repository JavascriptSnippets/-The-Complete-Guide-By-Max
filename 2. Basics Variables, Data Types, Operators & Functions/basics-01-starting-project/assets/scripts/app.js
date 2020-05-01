const defaultResult = 0;
let currentResult = defaultResult;

addBtn.addEventListener("click", add);

function getUserNumberEntered() {
  return parseInt(userInput.valuel);
}

function add() {
  const enertedNumber = getUserNumberEntered();
  const calcDescription = `${currentResult} + ${enertedNumber}`;
  currentResult = currentResult + parseInt(enertedNumber);
  outputResult(currentResult, calcDescription);
}
