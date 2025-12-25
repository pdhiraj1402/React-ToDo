import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({ value, checked, deleteTodo, onTodoCheck}) => 
{
    const handleDeleteTodo = (value) => 
    {
        deleteTodo(value);
    }

    const onHandleCheckTodo = (value) => 
    {
        onTodoCheck(value);
    }

    return (
        <li className="todo-item">
            <span className={checked ? "checkList" : "notCheckList" } >{value}</span>
            <button className="check-btn" onClick={() => {onHandleCheckTodo(value)}}>
                <MdCheck />
            </button>
            <button className="delete-btn" onClick={() => {handleDeleteTodo(value)}}>
                <MdDeleteForever />
            </button>
        </li>
    )
}