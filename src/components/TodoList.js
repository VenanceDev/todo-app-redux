import React from 'react'
import { connect } from 'react-redux'
import { SHOW_COMPLETED, SHOW_UNCOMPLETED } from '../redux/filterTypes';
import Todo from './Todo';

function TodoList({ todos, filter }) {

    const renderTodoOnFilter = filter => {
        switch (filter) {
            case SHOW_COMPLETED: return todos.filter(todo=>todo.completed===true).map(item=>(<Todo key={item.id} todo={item} />))
            case SHOW_UNCOMPLETED: return todos.filter(todo=>todo.completed===false).map(item=>(<Todo key={item.id} todo={item} />))
            default: return todos.map(todo=>(<Todo key={todo.id} todo={todo} />))
        }
    }

    return (
        <div className="todo-container">
            <ul className="todo-list">
                { todos.length > 0 ?
                    renderTodoOnFilter(filter) :
                    <p className="no-task-text">You don't have any Task yet!</p>
                }
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({todos: state.todos, filter: state.filter})

export default connect(mapStateToProps, null) (TodoList)
