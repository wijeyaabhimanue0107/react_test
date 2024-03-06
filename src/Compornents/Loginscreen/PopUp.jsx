import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ToDo.css';


const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

const TodoTable = ({ todos, onTodoClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>
              <Popup
                trigger={<button onClick={() => onTodoClick(todo)}>View Details</button>}
                position="right center"
              >
                <div>
                  <h3>Todo Details</h3>
                  <p>ID: {todo.id}</p>
                  <p>Title: {todo.title}</p>
                  <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
                </div>
              </Popup>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=10`);
        setTodos(response.data);
        setTotalPages(Math.ceil(response.headers['x-total-count'] / 10));
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, [currentPage]);


  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/<id>');
        setTodos(response.data);
        setTotalPages(Math.ceil(response.headers['x-total-count'] / 10));
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, [currentPage]);



  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const handleTodoClick = todo => {
    // todo contains all details, including the ID
    console.log('Todo clicked:', todo.id);

    // You can now use todo.id to make an API call or perform other actions
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoTable todos={todos} onTodoClick={handleTodoClick} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;