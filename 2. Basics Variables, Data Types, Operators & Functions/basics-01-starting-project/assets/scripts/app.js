const defaultResult = 0;
let currentResult = defaultResult;

addBtn.addEventListener('click', add);

function add() {
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, '');
}