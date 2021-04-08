console.log("**************");

age = prompt('Пользователь 1 - введите возраст');
fullName = prompt('Пользователь 1 - введите имя ') + ' ' + ' ' + prompt('Пользователь 1 - введите Фамилию');
console.log("1. ", age, " лет ", fullName);
averageAge = age;

age = prompt('Пользователь 2 - введите возраст');
fullName = prompt('Пользователь 2 - введите имя ') + ' ' + ' ' + prompt('Пользователь 2 - введите Фамилию');
console.log("2. ", age, " лет ", fullName);
averageAge = +averageAge + +age;

age = prompt('Пользователь 3 - введите возраст');
fullName = prompt('Пользователь 3 - введите имя ') + ' ' + ' ' + prompt('Пользователь 3 - введите Фамилию');
console.log("3. ", age, " лет ", fullName);
averageAge = (+averageAge + +age) / 3;

console.log("-------------- Средний возраст студента: ", averageAge, " --------------");
console.log("**************");