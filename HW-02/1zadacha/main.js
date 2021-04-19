who = prompt('Кто пришел?');

if (who === 'Админ') {

    who = prompt('Пароль?');
     
    if (who === 'Черный Властелин') {
        alert('Добро пожаловать!');

    } else if (who === null){
        alert('Вход отменен');

    } else {
        alert('Пароль неверен');
    }

} else if (who === null) {
    alert('Вход отменен');
    
} else {
    alert('Я вас не знаю');
}