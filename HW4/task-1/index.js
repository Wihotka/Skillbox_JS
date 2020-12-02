// Исходные данные
const n = -3;
const m = -10;
let random;

// Создаем пустой массив
let numbers = [];

// Создаем цикл for, где заполняем массив определенное число раз
for (let count = 1; count <= 42; ++count) {
    random = Math.floor(Math.random() * (Math.abs(n - m) +1) ) + Math.min(n, m);
    numbers.push(random);
};

// Выводим массив в консоль
console.log(numbers);
