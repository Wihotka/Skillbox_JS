(function() {
    // создаем и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTime = document.createElement('h2');
        appTime.textContent = title;
        return appTime;
    };

    // создаем и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.id = 'mainButton';
        button.textContent = 'Добавить дело';
        button.disabled = true;

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button,
        };
    };

    // создаем и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    };

    function createTodoItem(name) {
        let item = document.createElement('li');

        // кнопки помещаем в элемент, который красиво покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        // устанавливаем стили для элемента списка, а также для размещения кнопок
        // в его правой части с помощью flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;
        
        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        // вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        // приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
        return {
            item,
            doneButton,
            deleteButton,
        };
    };

    // создаем дефолтные задачи
    function createDefaultTasks (allTasks, isDone) {
        let defaultTasks = []; // Массив для результата

        // Заполняем массив
        for (let i = 0; i < allTasks.length; i++) {
            defaultTasks[i] = {name: allTasks[i], done: isDone};
        }

        return defaultTasks;
    };

    function createTodoApp (container, title = 'Cписок дел', todo, tasks) {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        // переменные для формирования пунктов списка
        let todoDefaultItem = [];
        let todoItems = [];
        //localStorage.clear();

        // сохранение данных
        let todoArray = localStorage.getItem(todo) ? JSON.parse(localStorage.getItem(todo)) : [];
        localStorage.setItem(todo, JSON.stringify(todoArray));

        // убираем null в массиве данных
        todoArray = todoArray.filter(e => e != null);
        localStorage.setItem(todo, JSON.stringify(todoArray));

        const data = JSON.parse(localStorage.getItem(todo));; // инициализация основного массива данных

        // Создаем цикл для вывода дефолтных задач
        if (tasks) {
            for (let i = 0; i < tasks.length; i++) {
                todoDefaultItem[i] = createTodoItem(tasks[i].name);

                todoList.append(todoDefaultItem[i].item);

                if (tasks[i].done == true) {
                    todoDefaultItem[i].item.classList.add('list-group-item-success');
                };

                todoDefaultItem[i].doneButton.addEventListener('click', function(){
                    todoDefaultItem[i].item.classList.toggle('list-group-item-success');
                });

                todoDefaultItem[i].deleteButton.addEventListener('click', function(){
                    if (confirm('Вы уверены?')) {
                        todoDefaultItem[i].item.remove();
                    };
                });
            };
        };

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        // вывод массива сохраненных данных
        for (let i = 0; i < data.length; i++) {
            if (todoArray[i]) {
                todoItems[i] = createTodoItem(data[i].description);

                todoList.append(todoItems[i].item);
                console.log(todoItems);

                if (todoArray[i].done === true) {
                    todoItems[i].item.classList.add('list-group-item-success');
                };

                todoItems[i].doneButton.addEventListener('click', function(){
                    todoItems[i].item.classList.toggle('list-group-item-success');
                    todoArray[i].done = !todoArray[i].done;
                    localStorage.setItem(todo, JSON.stringify(todoArray));
                });

                todoItems[i].deleteButton.addEventListener('click', function(){
                    if (confirm('Вы уверены?')) {
                        todoItems[i].item.remove();
                        delete todoArray[i];
                        localStorage.setItem(todo, JSON.stringify(todoArray));
                    };
                });
            };
        };

        // браузер создает событие submit на форме по нажатию на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function(e){
            // эта строчка необходима, чтобы предотвратить стандартное действие браузера
            // в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
            e.preventDefault();

            // игнорируем создание элемента, если пользователь ничего не ввел в поле
            if (!todoItemForm.input.value) {
                return;
            };

            let todoItem = createTodoItem(todoItemForm.input.value);
            let todoStatus = false;
            todoArray.push({
                description: todoItemForm.input.value,
                done: todoStatus});
            localStorage.setItem(todo, JSON.stringify(todoArray));

            // добавляем обработчики на кнопки
            todoItem.doneButton.addEventListener('click', function() {
                todoItem.item.classList.toggle('list-group-item-success');
                for (let i = 0; i < todoArray.length; i++) {
                    if (todoItem.item.childNodes[0].textContent === todoArray[i].description) {
                        todoArray[i].done = !todoArray[i].done;
                    };
                };
                localStorage.setItem(todo, JSON.stringify(todoArray));
            });

            todoItem.deleteButton.addEventListener('click', function() {
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove();

                    // определяем на какой элемент нажал пользователь и обращаем элемент массива в null
                    for (let i = 0; i < todoArray.length; i++) {
                        if (todoArray[i]) {
                            if (todoItem.item.childNodes[0].textContent === todoArray[i].description) {
                                delete todoArray[i];
                                localStorage.setItem(todo, JSON.stringify(todoArray));
                            };
                        };
                    };
                };
            });

            // создаем и добавляем дело с названием из поля
            todoList.append(todoItem.item);

            // обнуляем значение в поле, чтобы не пришлось стирать его вручную
            todoItemForm.input.value = '';

            // отключаем кнопку
            document.getElementById('mainButton').disabled = true;
        });

        // Вкл / Выкл кнопку
        todoItemForm.input.addEventListener('input', function(){
            if (todoItemForm.input.value !== '') {
                document.getElementById('mainButton').disabled = false;
            } else {
                document.getElementById('mainButton').disabled = true;
            }
        });
    };

    window.createDefaultTasks = createDefaultTasks;
    window.createTodoApp = createTodoApp;
})();
