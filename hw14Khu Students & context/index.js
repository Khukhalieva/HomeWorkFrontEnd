'use strict';

// создаем функцию-конструктор для создания объекта студента
function Student(name, faculty, marks) {
    this.name = name;
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
            return 0; // если нет оценок, медианная оценка 0
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
        const verifiedMarks = this.filterNumbers(); // фильтруем оценки

        if (verifiedMarks.length === 0) {
            return 0; // если нет оценок, максимальная оценка равна 0
        }

        return Math.max(...verifiedMarks);
    }

// создаем функцию для получения минимальной оценки студента
    this.getMinMark = function () {
        const verifiedMarks = this.filterNumbers();

        if (verifiedMarks.length === 0) {
            return 0;
        }

        return Math.min(...verifiedMarks);
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

        return this.name + ' ' + this.faculty + ' ' + total;
    }
}

// создаем новый объект student
    const student = new Student('Jon', 'Engineer', [62, 59, 100, 98, 33]);
    console.log(student);

// вызываем метод getAvgMark() для получения средней оценки студента
    console.log(student.getAvgMark());

// медианная оценка студента
    console.log(student.getMedianMark());

// максимальная оценка
    console.log(student.getMaxMark());

// минимальной оценка
    console.log(student.getMinMark());

//  сумма оценок
    console.log(student.getTotal());

//  информация о студенте в виде name + faculty + total
    console.log(student.getInfo());
