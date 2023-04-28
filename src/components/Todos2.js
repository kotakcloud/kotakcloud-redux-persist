import React from 'react';
import { useSelector } from 'react-redux';

export default function Todos2() {
  const todos = useSelector((state) => state.todo2Reducer);
  // todos comes from the reducer attribute name 
  // in configureStore

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

