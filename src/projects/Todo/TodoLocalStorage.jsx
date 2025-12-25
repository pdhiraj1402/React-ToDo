const todoKey = "reactTodo";
export const getTodoLocalStorageData = () => {
                                    const rawTodos = localStorage.getItem(todoKey);
                                    if(!rawTodos) return [];
                                    return JSON.parse(rawTodos);
}

export const setTodoLocalStorageData = (task) => {
  return localStorage.setItem("reactTodo", JSON.stringify(task));
}

