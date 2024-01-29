'use strict'

var gTodos = []

_createTodos()

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
    
    _saveTodos()
}

function toggleTodo(todoId) {
    const todo = gTodos.find(todo => todo.id === todoId)
    todo.isDone = !todo.isDone
    
    _saveTodos()
}

function getTodoById(todoId) {
    const todo = gTodos.find(todo => todo.id === todoId)
    return todo
}

function addTodo(txt) {
    const todo = _createTodo(txt)

    gTodos.unshift(todo)
    _saveTodos()
}

function _saveTodos() {
    saveToStorage('todoDB', gTodos)
}

function _createTodos() {
    gTodos = loadFromStorage('todoDB')

    if(!gTodos || gTodos.length === 0){
        gTodos = [
            _createTodo('Do This'), 
            _createTodo('Do That'), 
            _createTodo('Try This'),
        ]
        _saveTodos()
    }
}

function _createTodo(txt) {
    return {
        id: makeId(),
        txt,
        isDone: false,
    }
}