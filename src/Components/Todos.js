import React from 'react'
import TodoItem from './TodoItem'
const Todos = ({deleteTodo,todoList,updateTodo}) => {
  return (
    <>
    <div className="">
    {
        todoList.map((curElem)=>{
            return <TodoItem Todo={curElem} deleteTodo={deleteTodo} updateTodo={updateTodo} key={curElem.id} />
        })
    }
        
    </div>
   
    </>
  )
}

export default Todos