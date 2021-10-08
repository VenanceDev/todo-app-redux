import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, filterTodos } from '../redux/actions'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED } from '../redux/filterTypes'

function Form({ addTodo, filterTodos }) {
    const [todo, setTodo] = useState({})

    const onChangeTodoHandler = (e) => {
        setTodo({
            id: '',
            text: e.target.value,
            completed: false
        })
    }

    const onAddTodoHandler = e => {
        e.preventDefault();
        if(!todo.text || todo.text.trim()===""){
            alert("You must write a task to accomplish!")
            return
        }
        addTodo(todo);
        setTodo({})
    }

    return (
        <form onSubmit={(e)=>onAddTodoHandler(e)}>
            <input type="text" className="todo-input"
                    value={todo.text || ""}
                    onChange={(e)=>onChangeTodoHandler(e)} />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo"
                        onChange={(e)=>filterTodos(e.target.value)}>
                    <option value={SHOW_ALL}>All</option>
                    <option value={SHOW_COMPLETED}>Completed</option>
                    <option value={SHOW_UNCOMPLETED}>Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    addTodo: (todo) => dispatch(addTodo(todo)),
    filterTodos: (filter) => dispatch(filterTodos(filter))
})

export default connect(null, mapDispatchToProps) (Form)
