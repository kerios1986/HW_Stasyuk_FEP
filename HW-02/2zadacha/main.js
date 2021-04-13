a = +prompt('Введите число');

if ( a < 3) {
    console.log( "Отсаток - 0");

} else if ((a % 3) != 0) {
    console.log("Отсаток - ", (a % 3));

} else {
    console.log("Число", a, "кратно 3");
}
