import {supabase} from "../../lib/api";
import {useEffect, useState} from "react";
import {Todo} from "../../types";
// a list of the todos

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const getTodos = async () => {
        const {data, error} = await supabase.from<Todo>('todos').select('*')

        if (data) {
            setTodos(data);
        }
    }

    const toggleCompleted = async (id: number) => {
        // find the todo and see if it is marked as completed
        const todo = todos.find((todo: Todo) => todo.id === id);

        const {data, error} = await supabase.from<Todo>('todos').update({
            completed_at: todo?.completed_at ? null : new Date()
        }).eq('id', id).single()
        
        if (data) {
            setTodos(todos.map((todo: Todo) => todo.id === id ? data : todo))
        }
    }

    const deleteTodo = async (id: number) => {
        const {data, error} = await supabase.from<Todo>('todos').delete().eq('id', id).single()

        setTodos(todos.filter((todo: Todo) => todo.id !== id))
    }

    useEffect(() => {
        getTodos();
    }, [])

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo: Todo) => (
                    <li key={todo.id}>{todo.title} <span
                        className={`tag  ${todo.completed_at ? "complete-tag" : "incomplete-tag"}`}
                        onClick={() => toggleCompleted(todo.id)}>{todo.completed_at ? "Completed" : "Incomplete"}</span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

