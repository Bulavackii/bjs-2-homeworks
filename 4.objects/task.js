function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

const student1 = new Student("Igor", 'male', 23);
const student2 = new Student("Denis", 'male', 19);
const student3 = new Student("Oleg", 'male', 18);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.hasOwnProperty('excluded')) {
        return; 
    }
    if (!this.hasOwnProperty('marks')) {
        this.marks = [];
    }
    this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
    if (this.hasOwnProperty('excluded') || !this.hasOwnProperty('marks') || this.marks.length === 0) {
        return 0; 
    } else {
        const sum = this.marks.reduce(function (currentsum, currentNumber) {
            return currentsum + currentNumber;
        }, 0);
        const average = sum / this.marks.length;
        return average;
    }
}

Student.prototype.excluded = function (reason) {
    delete this.subject;
    delete this.marks;
    delete this.excluded;
    this.excluded = reason;
}

