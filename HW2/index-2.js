// Исходные данные
let a = 13.890123;
let b = 2.891564;
let n = 3;

// Вычисляем дробную часть
a = Math.floor((a - Math.floor(a)) * Math.pow(10, n));
b = Math.floor((b - Math.floor(b)) * Math.pow(10, n));

console.log(`дробные части ${a} и ${b}`)

// Сравниваем показания
console.log(`a больше b — ${a > b}`);
console.log(`a больше либо равно b — ${a >= b}`);
console.log(`a меньше b — ${a < b}`);
console.log(`a меньше либо равно b — ${a <= b}`);
console.log(`a равно b — ${a === b}`);
console.log(`a не равно b — ${a !== b}`);