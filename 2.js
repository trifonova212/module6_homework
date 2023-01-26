function findSimpleNumber(number) {
  if (number > 1 && number < 1000) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
      return "Не простое число";
      }
    }
      return "Простое число";
  }
  else if (number == 1 || number == 0) {
  return "Не простое число";
  }
  else {
  return "Данные неверны";
  }
}
  
console.log(findSimpleNumber(7));
