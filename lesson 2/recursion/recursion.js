var val = +prompt('Введите число A');
var pow = +prompt('Введите степень числа A');

function power(val, pow) {
    if (pow != 1) { 
      return val * power(val, pow - 1);
    } else {
      return val;
    }
  }
  
  alert( power(val, pow) ); 