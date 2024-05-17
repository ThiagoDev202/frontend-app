import React from 'react';

function TodoList({ todos, toggleTodo }){
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
                    {todo.completed ? <s>{todo.text}</s> : todo.text}
                </li>
            ))}
        </ul>
    )
}

export default TodoList;