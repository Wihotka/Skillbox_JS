// Исходные данные
let n = -3;
let m = -10;

// Генерируем случайное число в диапазоне
let random = Math.floor(Math.random() * Math.abs(n - m) ) + Math.min(n, m);

// Преобразуем число в нечетное
console.log( ( (Math.floor(random / 2) ) * 2) + 1);
