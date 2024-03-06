import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoScreen = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todo list:', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <strong>ID:</strong> {todo.id}, <strong>Title:</strong> {todo.title}, <strong>Completed:</strong> {todo.completed ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoScreen;