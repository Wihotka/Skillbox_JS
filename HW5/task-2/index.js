// Исходные данные
const sumOfProductBasket = 200000;
const numberOfGoods = 10;
const promocode = 'СКИДКА15';

// Создаем функцию для подсчета итоговой суммы в корзине
function getFinalPrice (basket, goods, promo) {
    // Рассчитываем первую скидку, используя цикл for of и условный оператор
    if (promo === 'ДАРИМ300') {
        if (basket > 300) {
            basket = basket - 300;
        } else {
            basket = 0;
        }
    }

    // Рассчитываем вторую скидку, используя условный оператор
    if (goods >= 10) {
        basket = basket * 0.95;
    }

    // Рассчитываем третью скидку, используя условный оператор
    if (basket >= 50000) {
        basket = ((basket - 50000) * 0.8) + 50000;
    }

    // Рассчитываем четвертую скидку, используя цикл for of и условный оператор
    if (promo === 'СКИДКА15' && basket >= 20000) {
        basket = basket * 0.85;
    }

    // Округляем итоговую сумму
    basket = Math.ceil(basket);

    // Выводим результат в консоль
    console.log(basket);

    // Возвращаем значение
    return basket;
}

// Вызываем функцию
getFinalPrice(sumOfProductBasket, numberOfGoods, promocode);