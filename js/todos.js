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
        <li onclick="onToggleTodo('${todo.id}')">
            <span class="${todo.isDone ? "done" : ""}">${todo.txt}</span>
            <button onclick="onRemoveTodo(event, '${todo.id}')">x</button>
        </li>`)
    elTodoList.innerHTML = strHtmls.join('')
}

function onRemoveTodo(ev, todoId) {
    ev.stopPropagation()
    
    const idx = gTodos.findIndex(todo => todo.id === todoId)
    gTodos.splice(idx, 1)
    
    renderTodos()
}

function onToggleTodo(todoId){
    console.log(todoId)
    const todo = gTodos.find(todo => todo.id === todoId)
    todo.isDone = !todo.isDone
    
    renderTodos()
}

function onAddTodo() {
	const elInput = document.querySelector('.new-todo')
	console.log(elInput.value)
	elInput.value = ''
}
