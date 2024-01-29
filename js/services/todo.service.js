'use strict'

var gTodos = [
    _createTodo('Do this'), 
    _createTodo('Do that'), 
    _createTodo('Try this'), 
]

function getTodos(filterBy) {
    if(filterBy === 'All') return gTodos

    const isDone = (filterBy === 'Done') ? true : false
    return gTodos.filter(todo => todo.isDone === isDone)
}

function getTotalTodos() {
    return gTodos.length
}

function getActiveTodos() {
    return gTodos.filter(todo => !todo.isDone).length
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
    const todo = _createTodo(txt)
    gTodos.unshift(todo)
}

function _createTodo(txt) {
    return {
        id: makeId(),
        txt,
        isDone: false,
    }
}