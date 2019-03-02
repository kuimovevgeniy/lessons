// var arr = [
//     ['Трусы', 100, 1],
//     ['Носки', 20, 4]
// ]



var arr = [
    {
        name: 'Трусы',
        price: 100,
        quantity: 1,
    },
    {
        name: 'Носки',
        price: 50,
        quantity: 1,
    },
    {
        name: 'Сандали',
        price: 200,
        quantity: 1,
    }
]

//sum = arr[0][2] * arr[0][1] + arr[1][2] * arr[1][1]

function getTotal(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        total = total + arr[i].price * arr[i].quantity;
    }
    return total;
}

document.write(getTotal(arr));