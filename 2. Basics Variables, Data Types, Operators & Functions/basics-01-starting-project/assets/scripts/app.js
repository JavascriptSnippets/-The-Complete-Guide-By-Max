let currentResult = 0;

currentResult = currentResult + 10;

// we can add line breaks to string surrounded by Backticks 
let currnetCalculation = `let me have 

white spaces`;

// to add line breaks to normal string, we need to use back slash
currnetCalculation = "let me have \n white spaces";

outputResult(currentResult, currnetCalculation);

function add(num1, num2) {
    const result = num1 + num2;
    alert(result);
}

add(1, 2);