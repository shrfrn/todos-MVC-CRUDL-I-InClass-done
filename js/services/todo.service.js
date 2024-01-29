'use strict'

var gTodos = [
    { id: 't101', txt: 'Do this', isDone: false },
    { id: 't102', txt: 'Do that', isDone: true },
    { id: 't103', txt: 'Try this', isDone: false },
]

function getTodos(filterBy) {
    if(filterBy === 'All') return gTodos
    
    const isDone = (filterBy === 'Done') ? true : false
    return gTodos.filter(todo => todo.isDone === isDone)
}

function removeTodo(todoId) {
    const idx = gTodos.findIndex(todo => todo.id === todoId)
    gTodos.splice(idx, 1)
}

function toggleTodo(todoId) {
    const todo = gTodos.find(todo => todo.id === todoId)
    todo.isDone = !todo.isDone
}

function getTodoById(todoId) {
    const todo = gTodos.find(todo => todo.id === todoId)
    return todo
}

function addTodo(txt) {
    const todo = {
        id: 't' + Date.now() % 1000,
        txt,
        isDone: false,
    }
    gTodos.unshift(todo)
}