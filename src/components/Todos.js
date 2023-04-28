import React from 'react';
import { useSelector } from 'react-redux';

export default function Todos() {
  const todos = useSelector((state) => state.todoReducer);

  return (
    <div className='todo-list'>
      <p>List:</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

