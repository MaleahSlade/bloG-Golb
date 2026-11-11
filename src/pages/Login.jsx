import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading
    login({ username, email }); // fake login, password isn't checked
    navigate("/");
  };

  return (
    <div className="login-box">
      <h2>Login to Ramen Raider</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Username" value={username}
          onChange={(e) => setUsername(e.target.value)} required />
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <a href="#" className="muted">Forgot Password? Click HERE!</a>
      <a href="#" className="accent">New user? Sign Up HERE!</a>
    </div>
  );
}