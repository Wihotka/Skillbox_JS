window.addEventListener('DOMContentLoaded', function() {
    
    // Создаем переменные для HTML элементов
    let input = document.getElementById('input');
    const button = document.getElementById('button');
    let div = document.getElementById('div');

    let timer; // Переменная для таймера

    // Функция для обратного отсчета
    function timerFunc() {
        timer = setInterval(() => {
            if (Number(div.textContent) !== 0) {
                div.textContent--;
            };
        }, 1000);
    }

    // Клик-событие
    button.addEventListener('click', function() {
        clearInterval(timer); // Очищаем таймер

        // Проверяем значение на соответствие
        if ((!isNaN(input.value)) && (Number(input.value) > 0) && (Number(input.value) < 61)) {

            div.textContent = input.value; // Передаем значение введенного значения
            
            timerFunc(); // Запускаем обратный отсчет
        } else {
            div.textContent = 'Введите число от 0 до 60';
        };

        input.value = ''; // Сбрасываем значение input
    });
});
