'use strict'

function onInit() {
    renderTodos()
}

function renderTodos() {
    const elTodoList = document.querySelector('.todo-list')
	const strHtml = `<li>
        <span class="done">Do that</span>
        <button onclick="onRemoveTodo('t456')">x</button>
    </li>`
    elTodoList.innerHTML = strHtml
}

function onRemoveTodo(todoId) {
	console.log('todoId: ', todoId)
}

function onAddTodo() {
	const elInput = document.querySelector('.new-todo')
	console.log(elInput.value)
	elInput.value = ''
}
