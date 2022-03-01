import { useState } from 'react';
import Signup from './scenes/Signup';

function App() {
  const [token, setToken] = useState();
  const [isUser, setIsUser] = useState();

  return (
    <section>
      {!token ? (
        isUser ? (
          <h1>Login</h1>
        ) : (
          <Signup setToken={setToken} setIsUser={setIsUser} />
        )
      ) : (
        <h1>User List</h1>
      )}
    </section>
  );
}

export default App;
