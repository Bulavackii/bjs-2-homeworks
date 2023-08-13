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

//=====================================================================================

// Task 2.

class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует"); // Генерируем ошибку
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c; // Периметр
    }

    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)); // формула Герона
        return area.toFixed(3); // Округление до трёх знаков после запятой
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c); // Попытка создания треугольника
    } catch (error) {
        // В случае перехвата исключения, возвращаем объект с геттерами
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}