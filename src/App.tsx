import React from 'react';
import TodoList from './modules/todos/TodoList';
import AddTodo from "./modules/todos/AddTodo";
import './index.css';

function App() {
    return (
        <div className='dark:bg-gray-900 dark:text-white min-h-screen'>
            <div className="container mx-auto">
                <h1 className="bg-amber-500">Supabase Basics</h1>
                <TodoList/>
                <AddTodo/>
            </div>
        </div>
    );
}

export default App;
