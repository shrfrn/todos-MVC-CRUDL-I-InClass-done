'use strict'

var gTodos = [
    { id: 't101', txt: 'Do this', isDone: false },
    { id: 't102', txt: 'Do that', isDone: true },
    { id: 't103', txt: 'Try this', isDone: false },
]

function onInit() {
    renderTodos()
}

function renderTodos() {
    const elTodoList = document.querySelector('.todo-list')
	const strHtmls = gTodos.map(todo => `
        <li>
            <span class="${todo.isDone ? "done" : ""}">${todo.txt}</span>
            <button onclick="onRemoveTodo('${todo.id}')">x</button>
        </li>`)
    elTodoList.innerHTML = strHtmls.join('')
}

function onRemoveTodo(todoId) {
    const idx = gTodos.findIndex(todo => todo.id === todoId)
    gTodos.splice(idx, 1)

    renderTodos()
}

function onAddTodo() {
	const elInput = document.querySelector('.new-todo')
	console.log(elInput.value)
	elInput.value = ''
}
