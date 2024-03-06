import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './ToDo.css';
import { useHistory } from "react-router-dom";


import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 240;

export default function ClippedDrawer() {
    const history = useHistory()
    const handleLogout = () => {
        // window.location();
        console.log(88888,"kkkkkk");
        window.location.href = "http://localhost:3000";


        history.push('/');
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
               Login Screen
          </Typography>
        </Toolbar>
        <div style={{ textAlign: 'right' }}>
            <button onClick={handleLogout}>Logout</button>
        </div>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['       ', '        '].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['ToDo'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <MailIcon /> : <InboxIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Content goes here */}
      </Box>
    </Box>
  );
}



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

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  const handleTodoClick = todo => {
    console.log('Todo clicked:', todo.id);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoTable todos={todos} onTodoClick={handleTodoClick} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export { App , ClippedDrawer };
