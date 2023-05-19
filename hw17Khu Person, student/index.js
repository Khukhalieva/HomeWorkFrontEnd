'use strict';

//создаем класс Person
function Person(name, surname )   {
    this.name = name;
    this.surname = surname;
    this.welcome = function ()  {
        return console.log('Hi! I\'m'+ ' ' + name + ' ' + surname)
    }

}
const person = new Person('John', 'Smith');

person.welcome(); // Hi! I'm John Smith

//создаем обьект Student с помощью функции -конструктор со всеми необходимыми функциями
function Student(name, surname, faculty, marks)  {

    Person.call(this, name, surname); // вызываем конструктор Person с передачей значений name и surname

    this.faculty = faculty;
    this.marks = marks;

// создаем функцию для фильтрации чисел в массиве оценок студента
    this.filterNumbers = function () {
        if (!Array.isArray(this.marks)) {
            return [];
        }
        return this.marks.filter(mark => typeof mark === 'number');
    }

// создаем функцию для вычисления средней оценки студента
    this.getAvgMark = function () {
        const verifiedMarks = this.filterNumbers(); // фильтруем оценки

        if (verifiedMarks.length === 0) {
            return 0; // нет оценок = 0
        }

        let sum = 0;
        for (let i = 0; i < verifiedMarks.length; i++) {
            sum += verifiedMarks[i];
        }

        return sum / verifiedMarks.length;
    }

// создаем функцию для вычисления медианной оценки студента
    this.getMedianMark = function () {
        const verifiedMarks = this.filterNumbers();

        if (verifiedMarks.length === 0) {
            return 0; // если нет оценок, медианная оценка = 0
        }

        const sortedMarks = verifiedMarks.sort((a, b) => a - b);
        const middleIndex = Math.floor(sortedMarks.length / 2);

        if (sortedMarks.length % 2 === 0) {
            // если количество оценок четное, берем среднее значение двух средних оценок
            return (sortedMarks[middleIndex - 1] + sortedMarks[middleIndex]) / 2;
        } else {
            // если количество оценок нечетное, берем среднюю оценку
            return sortedMarks[middleIndex];
        }
    }


// создаем функцию для получения максимальной оценки студента
    this.getMaxMark = function () {
        const verifiedMarks = this.filterNumbers();

        if (verifiedMarks.length === 0) {
            return 0;
        }

        return Math.max.apply(null, verifiedMarks);
    }

// создаем функцию для получения минимальной оценки студента
    this.getMinMark = function () {
        const verifiedMarks = this.filterNumbers();

        if (verifiedMarks.length === 0) {
            return 0;
        }

        return Math.min.apply(null, verifiedMarks);
    }

// создаем функцию для вычисления суммы оценок студента
    this.getTotal = function () {
        const verifiedMarks = this.filterNumbers();

        let sum = 0;
        for (let i = 0; i < verifiedMarks.length; i++) {
            sum += verifiedMarks[i];
        }

        return sum;
    }

// создаем функцию для получения информации о студенте (name + faculty + total)
    this.getInfo = function () {
        const total = this.getTotal(); // сумма оценок

        return this.name + ' ' + this.surname + ' ' +this.faculty + ' ' + total;

    }
}

//создаем прототип Person
Student.prototype = new Person('John', 'Smith');

const student = new Student('Lucy', 'Show', 'engineer', [86, 52, 99, 13, 100]);

student.welcome(); // Hi! I'm Lucy Show
console.log(student.getAvgMark()); // средняя оценка студента
console.log(student.getMedianMark()); // медианная оценка студента
console.log(student.getMaxMark()); // максимальная оценка
console.log(student.getMinMark()); // минимальная оценка
console.log(student.getTotal()); // сумма оценок
console.log(student.getInfo()); // информация о студенте в виде name + faculty + total


//создаем обьект Headman с помощью функции-конструктор
function Headman(name, surname, faculty, marks)  {

    Student.call(this, name, surname, faculty, marks); // вызываем конструктор студент с передачей значений
    this.defendGroup = function ()  {
        return console.log('This is my group. I\'m their hero!')
    }
}

//создаем прототип Student
Headman.prototype = new Student('John', 'Smith');

const headman = new Headman('Maksim', 'Popov', 'engineer', [99, 100, 91, 75, 97]);

headman.welcome(); // Hi! I'm Lucy Show
headman.defendGroup(); // This is my group. I'm their hero!
console.log(headman.getAvgMark()); // средняя оценка студента
console.log(headman.getMedianMark()); // медианная оценка студента
console.log(headman.getMaxMark()); // максимальная оценка
console.log(headman.getMinMark()); // минимальная оценка
console.log(headman.getTotal()); // сумма оценок
console.log(headman.getInfo()); // информация о студенте в виде name + faculty + total


