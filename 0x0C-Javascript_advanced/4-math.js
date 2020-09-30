/**
 *divideBy - Funtion that divide secondNumber by firstNumber
 *firstNumber: firts number
 *secondNumber: second number
 *Return: secondNumber / firstNumber
 *On Error: no control error
*/
function divideBy(firstNumber) {
  return function(secondNumber){
    return secondNumber / firstNumber;
  }
}
/**
 *addBy - Funtion that add secondNumber by firstNumber
 *firstNumber: firts number
 *secondNumber: second number
 *Return: secondNumber + firstNumber
 *On Error: no control error
*/
function addBy(firstNumber) {
  return function (secondNumber) {
    return firstNumber + secondNumber
  }
}

/* clousures */

let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);
