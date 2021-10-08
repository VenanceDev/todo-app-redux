import { ADD_TODO, DELETE_TODO, FILTER_TODOS, TOGGLE_TODO } from './actionTypes'

let nextTodoId=0

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: {...todo, id: nextTodoId++}
    }
}

export const deleteTodo = id => ({
    type: DELETE_TODO,
    id
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

export const filterTodos = filter => ({
    type: FILTER_TODOS,
    filter: filter
})