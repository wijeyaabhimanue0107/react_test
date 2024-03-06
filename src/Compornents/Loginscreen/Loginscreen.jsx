import React, { useState } from 'react';
// import Profile from './Profile';
// import { Route, Routes } from 'react-router-dom';
// import axios from 'axios';
//import { useNavigate } from 'react-router-dom';
//import { Navig } from './../Loginscreen/Navig';
import { useHistory } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  // const navigate = useNavigate();


  const handleLogin = () => {
    console.log(88888,"kkkkkk");

    const correctUsername = 'admin';
    const correctPassword = 'admin';

    if (username === "") {
      console.log('Login unsuccessful');
      
      setErrorMessage('Plese enter a valid username');
    } 
    
    if (username === correctUsername && password === correctPassword) {
      console.log('Login successful');
      // Successful login logic (you can redirect or perform other actions here)
    
      setErrorMessage('');

      // return (
      //   <div>
      //     <Routes>
      //       <Route path='navigate' element={<Profile/>}/>
      //     </Routes>
      //     <Profile/>
      //   </div>
      // );
      // navigate('/ToDo');

      history.push('/todos');

  } else {
    // Incorrect login logic
    setErrorMessage('Incorrect username or password. Please try again.');
  }
  };




  //const navigate = useNavigate()
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username : </label>
          <input
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

        </div>
        <div>
          <label>Password  : </label>
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <button type="button" onClick = {handleLogin}> */}
        <button onClick={handleLogin}>
          Login
        </button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default LoginForm;