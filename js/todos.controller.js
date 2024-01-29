'use strict'

function onInit() {
    renderTodos()
}

function renderTodos() {
    const elTodoList = document.querySelector('.todo-list')
	const todos = getTodos()
    const strHtmls = todos.map(todo => `
        <li onclick="onToggleTodo('${todo.id}')">
            <span class="${todo.isDone ? "done" : ""}">${todo.txt}</span>
            <button onclick="onRemoveTodo(event, '${todo.id}')">x</button>
        </li>`)
    elTodoList.innerHTML = strHtmls.join('')
}

function onRemoveTodo(ev, todoId) {
    ev.stopPropagation()
    
    removeTodo(todoId)
    renderTodos()
}

function onToggleTodo(todoId){
    toggleTodo(todoId)    
    renderTodos()
}

function onAddTodo() {
	const elInput = document.querySelector('.new-todo')

    addTodo(elInput.value)
    renderTodos()

	elInput.value = ''
}
