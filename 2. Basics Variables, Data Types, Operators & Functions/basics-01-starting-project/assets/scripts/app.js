const defaultResult = 0;
let currentResult = defaultResult;

addBtn.addEventListener("click", add);

function add() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, "");
}
