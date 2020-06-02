import React from 'react'
import './Todo.css'

const Todo = props => {

   
    return (
        <div>
            <p onClick={ () => 
            props.toggleCompleted(props.todo.id)} className={`item${props.todo.completed ? ' completed' : ""}`}> {props.todo.task}</p>
        </div>
    )
}

export default Todo 