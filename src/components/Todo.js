import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo, toggleTodo } from '../redux/actions'

function Todo({ todo, toggleTodo, deleteTodo }) {
    return (
        <div className={ `todo${todo.completed ? ' completed' : ''}` }>
            <li className="todo-item">{ todo.text }</li>
            <button className="complete-btn"
                    onClick={ () => toggleTodo(todo.id) }>
                <i  className="fas fa-check"></i>
            </button>
            <button onClick={ () => deleteTodo(todo.id) } className="trash-btn">
                <i  className="fas fa-trash"></i>
            </button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: id =>dispatch(toggleTodo(id)),
    deleteTodo: id =>dispatch(deleteTodo(id))
})

export default connect(null, mapDispatchToProps) (Todo)
