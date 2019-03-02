


var arr = [
    {
        name: 'Трусы',
        price: 100,
        quantity: 1,
    },
    {
        name: 'Носки',
        price: 50,
        quantity: 2,
    },
    {
        name: 'Сандали',
        price: 200,
        quantity: 1,
    }
]


var $cart = document.getElementById('cart');
function getTotal(arr) {
    var total = 0;
    var n = 0;
    for(var i = 0; i < arr.length; i++) {
        total = total + arr[i].price * arr[i].quantity;
        n = n + arr[i].quantity;
    }
    // return total;
    var $div = document.createElement('div');
    if(arr.length === 0) {
        $div.textContent = 'Корзина пуста';
    } else {
        $div.textContent = 'В корзине:' + n + ' шт. товаров на сумму ' + total + ' рублей';
    }
$cart.appendChild($div);
}

getTotal(arr);