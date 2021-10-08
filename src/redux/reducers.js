import { ADD_TODO, DELETE_TODO, FILTER_TODOS, TOGGLE_TODO } from "./actionTypes";
import { SHOW_ALL } from "./filterTypes";

const initialState = {
    todos: [], filter: SHOW_ALL
}

export const todoReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO: return {
            ...state,
            todos: ([
                ...state.todos,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: action.payload.completed
                }
            ])
        }
        case DELETE_TODO: return {
            ...state,
            todos: state.todos.filter(todo=>todo.id!==action.id)
        }
        case TOGGLE_TODO: return {
            ...state,
            todos: state.todos.map(todo=> todo.id === action.id ? {...todo, completed: !todo.completed} : todo )
        }
        case FILTER_TODOS: return {
            ...state,
            filter: action.filter
        }
        default: return state
    }
}