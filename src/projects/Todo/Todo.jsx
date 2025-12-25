import { useEffect, useState } from "react";

import "./Todo.css";
import {TodoForm} from "./TodoForm.jsx";
import {TodoList} from "./TodoList.jsx";
import {TodoDate} from "./TodoDate.jsx"
import {getTodoLocalStorageData, setTodoLocalStorageData } from "./TodoLocalStorage.jsx";

export const Todo = () =>
{   
    const [task, setTask] = useState( () => getTodoLocalStorageData());   

    const handleFormSubmit = (inputvalue) =>
    {
        const {id, content, checked} = inputvalue;

        if(!content) return;

        // if(task.includes(content)){ return; }
        const ifTodoContentMatched = task.find((currTask) => currTask.content === content);
        if(ifTodoContentMatched) return;

        // setTask((preTask)=> [...preTask, content]);
        setTask((preTask)=> [...preTask, {id, content, checked}]);
       
    }

    //  Add Data to local storage
    useEffect(() => {
        setTodoLocalStorageData(task);
    }, [task]);
  
    const handleDeleteTodo = (value) => 
    {
        const updatedTask = task.filter((currTask) => currTask.content !== value );
        setTask(updatedTask);
    }

    const handleCheckTodo = (value) =>
    {
        const updatedTask = task.map((currTask) =>                             
            {
                if(currTask.content == value){
                    return {...currTask, checked : !currTask.checked}
                }else{
                    return currTask;
                }
            }
        );
        setTask(updatedTask);
    }

    const handleClearTodoData = () => 
    {
        setTask([]);
    }

    return (
        <section className = "todo-container">

            <header>
                <h1> Todo List </h1>
                <TodoDate/>
            </header>

            <TodoForm onAddTodo={handleFormSubmit}/>
            
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((currTask) => 
                            {
                                return <TodoList key={currTask.id} value={currTask.content} checked={currTask.checked} deleteTodo={handleDeleteTodo} onTodoCheck={handleCheckTodo}/>
                            }
                        )
                    }
                </ul>
            </section>

            <section >
                <button className="clear-btn" onClick = {handleClearTodoData}>
                    Clear All
                </button>
            </section>

        </section>
    )
}