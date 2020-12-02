window.addEventListener('DOMContentLoaded', function() {
    createTodoApp(document.getElementById('todo-app'), 'Дела мамы', 'momTodo', createDefaultTasks(['Переехать в Австралию', 'Купить кенгуру'], 1));
});