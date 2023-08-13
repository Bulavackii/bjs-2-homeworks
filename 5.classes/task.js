//Task №1.

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100; // по умолчанию состояние 100
      this.type = null; // по умолчанию тип null
    }
  
    // Метод для подклейки и улучшения состояния
    fix() {
      this.state *= 1.5;
    }
  
    // Сеттер для свойства state с проверкой значений
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    // Геттер для свойства state
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine"; // тип журнала
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author; // имя автора книги
      this.type = "book"; // тип книги
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel"; // тип романа
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic"; // тип фантастики
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective"; // тип детектива
    }
  }
  

//=============================================================

  //Task №2.

  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(key, value) {
      return this.books.find(book => book[key] === value) || null;
    }
  
    giveBookByName(bookName) {
      const index = this.books.findIndex(book => book.name === bookName);
      if (index !== -1) {
        return this.books.splice(index, 1)[0];
      }
      return null;
    }
  }

  //=============================================================

  //Task №3.

  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {}; // Свойство для хранения оценок
    }
  
    addMark(mark, subject) {
      if (mark >= 2 && mark <= 5) {
        if (!this.marks[subject]) {
          this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
      }
    }
  
    getAverageBySubject(subject) {
      if (!this.marks[subject]) {
        return 0; // Предмет отсутствует
      }
      const sum = this.marks[subject].reduce((total, mark) => total + mark, 0);
      return sum / this.marks[subject].length;
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
      if (subjects.length === 0) {
        return 0; // Нет оценок
      }
      const totalSum = subjects.reduce((total, subject) => {
        return total + this.getAverageBySubject(subject);
      }, 0);
      return totalSum / subjects.length;
    }
  }