import { useState } from "react";
import { useAuth } from "./auth";

function LoginPage() {
  const auth = useAuth();
  const [username, setUsername] = useState("");

  const send = (e) => {
    e.preventDefault();
    console.log({ username });
    auth.login({ username });
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={send}>
        <label>Usuario: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="usuario"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginPage;
