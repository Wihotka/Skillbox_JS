window.addEventListener('DOMContentLoaded', function() {

    // Создаем переменные для HTML элементов
    let input = document.createElement('input');
    let h2 = document.createElement('h2');

    let text; // Переменная для текста
    let temporary; // Вспомогательная переменная для хранения промежуточных значений

    // Исходные значения переменных
    input.value = '';
    input.placeholder = 'Введите текст';
    h2.textContent = '';

    // Помещаем HTML элементы на страницу
    document.body.append(input);
    document.body.append(h2);

    // Функция для вывода текста
    function textShow() {
        text = setTimeout(() => {
            temporary = input.value;
            input.value = '';
            h2.textContent = temporary;
        }, 300);
    };

    // Событие вывода
    input.addEventListener('input', function() {
        clearTimeout(text);
        textShow();
    });
});
