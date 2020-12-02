// Исходные данные
let month = [];
const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const firstJanuary = week.indexOf('Вторник'); // Указываем нужный день недели

// Заполняем массив месяца
for (let day = 1; day <= 31; ++day) {
    month.push(day);
};

// Выводим результат в консоль с помощью цикла for in
for (day in month) {
    console.log(`${parseInt(day) + 1} января, ${week[(parseInt(day) + firstJanuary) % 7]}`);
};
