// Исходные данные
const name = 'beneDict';
const surname = 'CumberBAtch';

// Преобразуем имя
const correctName = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
const correctSurname = surname.substring(0, 1).toUpperCase() + surname.substring(1).toLowerCase();

// Сравниваем имена и выводим в консоль
console.log(name === correctName && surname === correctSurname ? 'Имя осталось без изменений' : 'Имя было преобразовано');
