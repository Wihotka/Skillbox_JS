// Исходные данные
const roadMines = [false, false, false, false, false, false, false, false, false, false];
let i;

// Создаем цикл for in для перемещения танка по элементам массива
for (i in roadMines) {
    console.log(`танк переместился на ${parseInt(i) + 1}`);
    
    // С помощью условного оператора находим первую мину и повышаем индекс массива на 1 для нового цикла
    if (roadMines[i] === true) {
        console.log('танк поврежден');
        ++i;
        
        // Создаем цикл for для перемещения танка по оставшимся элементам массива
        for (i; i < (roadMines.length); ++i) {
            console.log(`танк переместился на ${parseInt(i) + 1}`);

            // С помощью условного оператора находим вторую мину и прерываем цикл
            if (roadMines[i] === true) {
                console.log('танк уничтожен');
                break;
            }
        }
        break;
    };
}
