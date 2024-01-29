'use strict'

var gFilterBy = 'All'

function onInit() {
    renderTodos()
}

function renderTodos() {
    const elTodoList = document.querySelector('.todo-list')
	const todos = getTodos(gFilterBy)
    const strHtmls = todos.map(todo => `
        <li onclick="onToggleTodo('${todo.id}')">
            <span class="${todo.isDone ? "done" : ""}">${todo.txt}</span>
            <button onclick="onReadTodo(event, '${todo.id}')">Details</button>
            <button onclick="onRemoveTodo(event, '${todo.id}')">x</button>
        </li>`)
    elTodoList.innerHTML = strHtmls.join('')
    renderStats()
}

function renderStats() {
    const elTotal = document.querySelector('.total-todos')
    const elActive = document.querySelector('.active-todos')

    elTotal.innerText = getTotalTodos()
    elActive.innerText = getActiveTodos()
}

function onSetFilterBy(elStatus) {
    gFilterBy = elStatus.value
    renderTodos()
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

function onReadTodo(ev, todoId) {
    ev.stopPropagation()
    
    const elDialog = document.querySelector('.todo-details')
    const elTodo = elDialog.querySelector('.todo-details pre')

    const todo = getTodoById(todoId)

    elTodo.innerText = JSON.stringify(todo, null, 4)
    elDialog.showModal()
}

function onCloseDetails(ev) {
    ev.preventDefault()

    const elModal = document.querySelector('.todo-details')
    elModal.classList.add('hidden')
}

function onAddTodo(ev) {
    ev.preventDefault()

	const elInput = document.querySelector('.new-todo')

    addTodo(elInput.value)
    renderTodos()

	elInput.value = ''
}
