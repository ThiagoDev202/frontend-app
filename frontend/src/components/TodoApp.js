import React, { useReducer } from 'react';
import { todoReducer, ADD_TODO, TOGGLE_TODO } from './todoReducer';

const TodoApp = () => {
    const [todos, dispatch] = useRedcer(todoReducer, []);

    const addTodo = text => {
        dispatch({ type: ADD_TODO, text });
    };

    const toggleTodo = id => {
        dispatch({ type: TOGGLE_TODO, id });
    };
};

export default TodoApp;