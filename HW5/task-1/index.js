// Исходные данные
const ourDefaultEmails = ['32167@mail.ru', 'cool777@gmail.com', 'meowmeow@yandex.ru', 'foolish@rambler.ru', 'office@bk.ru', 'sobaka@sobaka.com', 'list@icloud.com'];
const ourBlackListEmails = ['foolish@rambler.ru', 'sobaka@sobaka.com', 'cool777@gmail.com'];

// Выводим исходные массивы в консоль
console.log(`Исходные email-адреса: ${ourDefaultEmails}`);
console.log(`Email-адреса в черном списке: ${ourBlackListEmails}`);

// Создаем функцию для сортировки массива
function getCompletedEmails(defaultEmails, blackListEmails) {
    const completedEmails = defaultEmails.filter(email => !blackListEmails.includes(email));

    // Проверяем массивы
    console.log(ourDefaultEmails);
    console.log(completedEmails);

    return completedEmails;
}

// Выводим результат в консоль
console.log(`Отсортированные email-адреса: ${getCompletedEmails(ourDefaultEmails, ourBlackListEmails)}`);
