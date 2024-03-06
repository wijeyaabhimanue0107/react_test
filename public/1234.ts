import React, { useState } from 'react';
//import useHistory from "react-router-dom"

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    console.log(88888,"kkkkkk");

    const correctUsername = 'admin';
    const correctPassword = 'admin';

    if (username === correctUsername && password === correctPassword) {
      // Successful login logic (you can redirect or perform other actions here)
      

      console.log('Login successful');
      setErrorMessage('');

    } else {
      // Incorrect login logic
      setErrorMessage('Incorrect username or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username : </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password  : </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default LoginForm;