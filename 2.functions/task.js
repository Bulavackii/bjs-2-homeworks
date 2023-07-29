// Задача 1.

function getArrayParams(...arr) {

  // Инициализируем переменные min, max и sum
  let min = arr[0], max = arr[0], sum = 0;

  // Проходим по массиву и находим минимум, максимум и сумму элементов
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    
    // Находим минимум
    if (currentElement < min) {
      min = currentElement;
    }

    // Находим максимум
    if (currentElement > max) {
      max = currentElement;
    }

    // Суммируем элементы для вычисления среднего значения
    sum += currentElement;
  }

  // Вычисляем среднее значение 
  const avg = +(sum / arr.length);

  // Округляем среднее значение до двух знаков после запятой и возвращаем объект с результатами
  return { min: min, max: max, avg: avg.toFixed(2) };
}



// Задача 2.

function summElementsWorker(...arr) {
  // Если массив пустой, сразу вернем 0
  if (arr.length === 0) return 0;

  // Используем метод reduce для нахождения суммы элементов массива
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// Функция для нахождения разницы между максимальным и минимальным элементами массива
function differenceMaxMinWorker(...arr) {
  // Если массив пустой, сразу вернем 0
  if (arr.length === 0) return 0;

  // Находим максимальное и минимальное значения в массиве
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  // Возвращаем разницу между максимальным и минимальным значениями
  return max - min;
}

// Функция для нахождения разницы между суммой чётных и нечётных элементов массива
function differenceEvenOddWorker(...arr) {
  // Если массив пустой, сразу вернем 0
  if (arr.length === 0) return 0;

  // Инициализируем переменные для накопления суммы чётных и нечётных элементов
  let sumEvenElement = 0;
  let sumOddElement = 0;

  // Перебираем каждый элемент массива
  for (let i = 0; i < arr.length; i++) {
    // Если элемент чётный, добавляем его к сумме чётных элементов
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else { // Иначе, добавляем его к сумме нечётных элементов
      sumOddElement += arr[i];
    }
  }

  // Возвращаем разницу между суммой чётных и нечётных элементов
  return sumEvenElement - sumOddElement;
}

// Функция для нахождения среднего значения чётных элементов массива
function averageEvenElementsWorker(...arr) {
  // Если массив пустой, сразу вернем 0
  if (arr.length === 0) return 0;

  // Инициализируем переменные для накопления суммы чётных элементов и их количества
  let sumEvenElement = 0;
  let countEvenElement = 0;

  // Перебираем каждый элемент массива
  for (let i = 0; i < arr.length; i++) {
    // Если элемент чётный, добавляем его к сумме чётных элементов
    // и увеличиваем счетчик чётных элементов
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }

  // Возвращаем среднее значение чётных элементов (сумма / количество)
  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}


// Задача 3.

function makeWork(arrOfArr, func) {

  let maxWorkerResult = -Infinity; 

  // Перебираем каждый элемент массива arrOfArr
  for (const arr of arrOfArr) {
    // Вызываем функцию-насадку с разделенными элементами подмассива arr
    const result = func(...arr);

    // Проверяем, является ли полученное значение больше текущего максимального значения
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}