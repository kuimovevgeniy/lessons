var a = +prompt('Введите число A');
var b = +prompt('Введите число B');


if (a >= 0 && b >= 0) {
    alert(a - b);
}

if (a < 0 && b < 0) {
    alert(a * b);
}

if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
    alert(a + b);
}