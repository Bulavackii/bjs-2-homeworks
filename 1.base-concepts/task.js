// Задача 1

"use strict"

let arr = [];

function solveEquation(a, b, c) {
  
  const discriminant = Math.pow(b, 2) - 4*a*c

  if(discriminant < 0) {
    arr = [];                // Корней нет
  } else if (discriminant == 0) {
    const root = -b/(2*a);
    arr = [root];
  } else {
    const rootOne = (-b + Math.sqrt(discriminant) )/(2*a);
    const rootTwo = (-b - Math.sqrt(discriminant) )/(2*a);
    arr = [rootOne, rootTwo];
  }

  return arr;
}





// Задача 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Проверка на валидность аргументов
  if (
    typeof percent !== "number" ||
    typeof contribution !== "number" ||
    typeof amount !== "number" ||
    typeof countMonths !== "number" ||
    percent < 0 ||
    percent > 100 ||
    contribution < 0 ||
    amount <= 0 ||
    countMonths <= 0 ||
    !Number.isInteger(countMonths) // Проверка на дроби
  ) {
    return alert("Ошибка входных данных. Убедитесь, что все аргументы являются числами и введены корректные значения");
  }

  // Преобразуем процентную ставку в доли (от 0 до 1) и в месячную ставку, п. 2
  const monthlyPercent = percent / 100 / 12;

  // Вычисляем тело кредита , п. 3
  const loanAmount = amount - contribution;

  // Вычисляем ежемесячный платеж, п. 4
  const monthlyPayment =
    loanAmount *
    (monthlyPercent +
      monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));

  // Вычисляем общую сумму, которую придется заплатить клиенту, п. 5
  const totalPayment = monthlyPayment * countMonths;

  // Округляем результат до двух значений после запятой, п. 6
  const roundedTotalPayment = Math.round(totalPayment * 100) / 100;

  return roundedTotalPayment;
}