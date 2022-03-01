import { useState } from 'react';

function App() {
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState();

  return <section>{!token ? <h1>Login</h1> : <h1>User List</h1>}</section>;
}

export default App;
