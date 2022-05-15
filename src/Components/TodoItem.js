import React from 'react'
import './style.css';
const TodoItem = ({Todo, deleteTodo,updateTodo}) => {
  return (
    <>
        <div className="item-container my-3">
                <p className='todo-desc'>{Todo.desc}</p>
                <div className="icon-container">

                <i className="fa-solid fa-pen-to-square mx-2 up-icon" onClick={()=>updateTodo(Todo.id)}></i>
                <i className="fa-solid fa-trash-can tra-icon " onClick={()=>deleteTodo(Todo.id)}></i>
                </div>
        </div>
    </>
  )
}

export default TodoItem