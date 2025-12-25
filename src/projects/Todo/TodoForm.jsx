import { useEffect, useState } from "react";
export const TodoForm = ({onAddTodo}) => 
{
    const [inputvalue, setinputvalue] = useState({});

    const handleInputChange = (value) => 
    {
        setinputvalue({id:value, content:value, checked:false});
    }

    const handleFormmSubmit = (event) => 
    {
        event.preventDefault();
        onAddTodo(inputvalue);
        setinputvalue({id:"", content:"", checked:""});
    }
    

    return (
        <section className="form">
            <form onSubmit = {handleFormmSubmit}>
                <div>
                    <input type="text" className="todo-input" autoComplete="off" value={inputvalue.content} onChange={(event) => handleInputChange(event.target.value)}/>
                </div>
                <div>
                    <button type="submit" className="todo-btn">Add Task</button>
                </div>
            </form>
        </section>
    )
}