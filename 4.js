function showSequence(firstNumber, secondNumber) {
  let variable = firstNumber;
  let timerId = setInterval(function() {
    console.log(variable);
    if (variable == secondNumber) {
      clearInterval(timerId);
    }
    variable++;   
  }, 1000);
}

showSequence(5, 15);