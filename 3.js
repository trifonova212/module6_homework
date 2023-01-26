function firstFunction(firstNumber) {
  return function secondFunction(secondNumber) {
  return firstNumber + secondNumber;
  };
}

console.log(firstFunction(5)(2));
