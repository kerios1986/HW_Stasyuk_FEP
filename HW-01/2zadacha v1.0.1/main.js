console.log("**************");
console.log("Список студентов зарегестрировавшихся на вебинар:");

student1 = prompt('Пользователь 1 - введите возраст') + ' лет ' + prompt('Пользователь 1 - введите имя ') + ' ' + ' ' + prompt('Пользователь 1 - введите Фамилию');
student2 = prompt('Пользователь 2 - введите возраст') + ' лет ' + prompt('Пользователь 2 - введите имя ') + ' ' + ' ' + prompt('Пользователь 2 - введите Фамилию');
student3 = prompt('Пользователь 3 - введите возраст') + ' лет ' + prompt('Пользователь 3 - введите имя ') + ' ' + ' ' + prompt('Пользователь 3 - введите Фамилию');

console.log("1.", student1);
console.log("2.", student2);
console.log("3.", student3);

console.log("-------------- Средний возраст студента: ", (parseInt(student1) + parseInt(student2) + parseInt(student3)) / 3, " --------------");
console.log("**************");