/* num = 1;
while (num <= 1) {
  prime: for (var i = 2; i <= 100; i++) {

    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue prime;
    }

    document.write(i + '<br>');
  }
  num++;
} */

function isPrime(num) {
  if(num < 2) {
    return false;
  }

  var i = 2;
  while(i < num) {
    if(num % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}
var i = 0;
while(i <= 100) {
  if(isPrime(i)) {
    document.write(i + '<br>');
  }
  i++;
}

