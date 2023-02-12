import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

function Welcome() {
  const loggedIn = false;

  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const displayed = () => {
    // eslint-disable-next-line no-console
    console.log(loggedIn);
    if (loggedIn === false) {
      return (
        <div>
          <button type="button" onClick={handleRegister}>Register</button>
          <button type="button" onClick={handleLogin}>Login</button>
        </div>
      );
    }
    return (
      <button type="button">Logout</button>
    );
  };

  return (
    <div className="container">
      <h1>Welcome</h1>
      {displayed()}
    </div>
  );
}

export default Welcome;
