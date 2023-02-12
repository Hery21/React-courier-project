import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [authenticate, setAuthenticate] = useState(localStorage.idToken);

  const handleLogin = () => {
    const loginData = {
      email,
      password,
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    };

    fetch('http://localhost:8080/login', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('idToken', data.idToken);
        // setAuthenticate(localStorage.idToken);
        return data.data;
      });
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <p>Email</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
      <p />
    </div>
  );
}

export default Login;
