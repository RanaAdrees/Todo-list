import React, { useState, useEffect } from 'react'
import './style.css'
import Todos from './Todos';
import Navbar from './Navbar';
const TodoApp = () => {
    const [inputVal, setInputVal] = useState("");
    const [status, setStatus] = useState(false);
    const [updatedTodo, setUpdatedTodo] = useState(-1);
    const[searchChange,setsearchChange]=useState(false);
    let initTodo = [];
    if (localStorage.getItem('todolist') === null) {
        initTodo = [];

    }
    else {
        initTodo = JSON.parse(localStorage.getItem('todolist'));
    }
    const [todoList, setTodoList] = useState(initTodo);


    const addTodo = () => {
        console.log("Adding todo");
        setsearchChange(false);
        if (!inputVal) {
            alert("Input field cannot be null")
        }
        else {
            if (status) {
               setTodoList(
                   todoList.map((curE)=>{
                       if(curE.id===updatedTodo)
                       {
                           return{...curE,desc:inputVal}
                       }
                       return curE;
                   })
               )
               setInputVal("");
               setStatus(false);
               setUpdatedTodo(-1);
                
            }
            else {
                let iD = 0;
                if (todoList.length === 0) {
                    iD = 0;
                }
                else {
                    iD = todoList[todoList.length - 1].id;
                    iD = iD + 1;
                }
                let myTodo = {
                    id: iD,
                    desc: inputVal
                }
                setTodoList([...todoList, myTodo]);
                setInputVal("");
            }

        }
    }
    const deleteTodo = (id) => {
        console.log("Delete Todo");
        setsearchChange(false);
        setTodoList(todoList.filter((curEle) => {
            return curEle.id !== id;
        }))
    }

    const updateTodo = (id) => {
        console.log("Updating todo:" + id);
        setsearchChange(false);
        let reqTodo = todoList.find((curEle) => {
            return curEle.id === id;

        })
        setInputVal(reqTodo.desc);
        setStatus(true);
        setUpdatedTodo(id);

    }
    const deleteAll=()=>{
        setsearchChange(false);
        setTodoList([]);
    }
    const searchTodo=(searchValue)=>{
        setsearchChange(true);
        console.log("Search value:"+searchValue);
        const arr=JSON.parse(localStorage.getItem('todolist'));
        const mytodoList=arr.filter((curElement)=>{
           return curElement.desc.toLowerCase().includes(searchValue.toLowerCase());
       })
       console.log("My todo array:"+mytodoList)
       console.log(" todo array:"+arr)
       setTodoList(mytodoList );
    }
    useEffect(() => {
        if(!searchChange)
        {
            localStorage.setItem('todolist', JSON.stringify(todoList))
        }

    }, [todoList])

    return (

        <>
            <Navbar searchTodo={searchTodo}/>
            <div className="container main-container ">
                <h1 className='t-head text-center'>Todo List App✌</h1>
                <div className="container detail-container">
                    <div className=''>
                    <h4 className='t-head text-center'>Add Todo💪</h4>
                    <div className="d-flex">

                        <input type="text" className='todo-inp'
                            placeholder='✍Enter something...'
                            autoFocus
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}

                        />
                        {
                            status ? <i className="fa-solid fa-pen-to-square plus-icon" onClick={addTodo}></i> : <i className="fa-solid fa-plus plus-icon" onClick={addTodo}></i>
                        }
                    </div>

                    </div>

                    <Todos todoList={todoList} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                </div>
                <div className="container check-btn-cont">

                <button className="btn-primary btn check-btn my-2" onClick={deleteAll}>Clear List</button>
                </div>
            </div>
        </>
    )
}

export default TodoApp