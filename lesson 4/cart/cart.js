var arr = [
    ['Трусы', 100, 1],
    ['Носки', 20, 4]
]

//sum = arr[0][2] * arr[0][1] + arr[1][2] * arr[1][1]

function getTotal(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        total = total + arr[i][1] * arr[i][2];
    }
    return total;
}

document.write(getTotal(arr));