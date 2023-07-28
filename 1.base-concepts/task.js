"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  const discriminant = Math.pow(b, 2)-4*a*c

  if(discriminant < 0) {
    arr = [];
  } else if (discriminant = 0) {
    const root = -b/(2*a);
    arr = [root];
  } else {
    const rootOne = (-b + Math.sqrt(d) )/(2*a);
    const rootTwo = (-b - Math.sqrt(d) )/(2*a);
    arr = [rootOne, rootTwo];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

}