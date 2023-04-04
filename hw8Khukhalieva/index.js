'use strict';

//Средняя оценка студента

function addAverageMarks(averageGrade) {
    let clone = averageGrade.slice();
    clone.forEach((student, index) => {
        let x = 0;
        let studentMark = (Math.ceil(student.marks.map(i => x += i, x).reverse()[0] / student.marks.length));
        clone[index] = Object.assign(clone[index], { averageGrade: studentMark });
    });
    return clone;
}
console.log(addAverageMarks(test));

//Список студентов на отчисление

function excludedStudents(students) {
    let clone = addAverageMarks(students).slice();
    for( let i = 0; i < clone.length; i++ ) {
        if ( clone[i].averageGrade <= 50 ) {
            return clone[i];
        }
    }
}

console.log(excludedStudents(test));

// Медианная оценка студента

function median(marks) {
    let clone = marks.slice();
    clone.sort( (a, b) => a - b );
    do {
        clone.pop();
        clone.shift();
    } while (clone.length > 2)

    if (clone.length === 2) {
            return (clone[0] + clone[1]) / 2;
    }
    return clone[0];
}

function addMedianMarks(arr) {
    let medianMarks = arr.slice();
    medianMarks.forEach((student, index) => {
        medianMarks[index] = Object.assign(medianMarks[index], { medianMark: median(medianMarks[index].marks) });
    });
    return medianMarks;
}

console.log(addMedianMarks(test));

//Новый студент

function addNewStudent(arr) {
    let cloneStudent = arr.slice();
    cloneStudent.push(objNewStudent);

    return cloneStudent;
}
console.log(addNewStudent(test));

//Распечатать список студентов

function studentProgressList(arr)   {
    let cloneStudentProgress = addAverageMarks(arr);

    cloneStudentProgress.sort(function (a, b) {
        if (a.averageGrade < b.averageGrade) {
            return 1;
        }
        if (a.averageGrade > b.averageGrade) {
            return -1;
        }
    });
    cloneStudentProgress.forEach((element) =>
        console.log(`${element.name}  -  ${element.averageGrade}`)
    );
    return cloneStudentProgress;
}
console.log(studentProgressList(test));

//Список самых успешных студентов

function studentProgressTop(arr)   {
    let cloneStudentTop = addAverageMarks(arr);

    cloneStudentTop.sort(function (a, b) {
        if (a.averageGrade < b.averageGrade) {
            return 1;
        }
        if (a.averageGrade > b.averageGrade) {
            return -1;
        }

    });
    cloneStudentTop = cloneStudentTop.splice(0, 5);
    return cloneStudentTop;
}

console.log(studentProgressTop(test));


