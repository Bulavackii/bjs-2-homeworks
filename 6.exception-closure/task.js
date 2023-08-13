// Task 1.

function parseCount(value) {
    const parsedValue = Number.parseFloat(value); // Попытка парсинга строки в число

    if (isNaN(parsedValue)) { // Если результат парсинга NaN
        throw new Error("Невалидное значение"); // Генерируем ошибку
    }

    return parsedValue; // Возвращаем результат парсинга
}

function validateCount(value) {
    try {
        return parseCount(value); // Попытка парсинга значения
    } catch (error) {
        return error; // Возвращаем ошибку из функции в случае перехвата исключения
    }
}
