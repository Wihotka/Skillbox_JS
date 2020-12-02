window.addEventListener('DOMContentLoaded', function() {
    createTodoApp(document.getElementById('todo-app'), 'Мои дела', 'myTodo', createDefaultTasks(['Отнести кольцо в Мордор', 'Спасти принцессу', 'Найти крестраж', 'Поговорить со львом в шкафу'], 1));
});