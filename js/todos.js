'use strict'

function onRemoveTodo(todoId) {
    console.log('todoId: ', todoId)
}

function onAddTodo() {
    const elInput = document.querySelector('.new-todo')
    console.log(elInput.value)
    elInput.value = ''
}