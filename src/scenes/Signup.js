import { useState } from 'react';

export default function Signup({ setToken, setIsUser }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3002/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => setToken(data.token))
      .catch(alert);
  };

  return (
    <>
      <h1>Sign Up</h1>
      <form>
        <label>
          Email:{' '}
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          password:{' '}
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type='submit' value='Sign Up' />
      </form>
      <br />
      <button onClick={() => setIsUser(true)}>Login</button>
    </>
  );
}
