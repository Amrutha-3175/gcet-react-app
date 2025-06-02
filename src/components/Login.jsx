
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "test@example.com" && password === "1234") {
      setUser({ name: "Test User", email });
      navigate("/home");
    } else {
      setError("Wrong email or password!");
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button onClick={handleLogin}>Submit</button>
      <button onClick={() => navigate("/register")}>Create Account</button>
    </div>
  );
};

export default Login;
