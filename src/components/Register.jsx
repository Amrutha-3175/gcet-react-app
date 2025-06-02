import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Register = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (password === confirm) {
      setUser({ name, email });
      navigate("/home");
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <input
        placeholder="Name (optional)"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        placeholder="Phone Number (optional)"
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <select value={country} onChange={e => setCountry(e.target.value)}>
        <option>Select Country (optional)</option>
        <option>India</option>
        <option>USA</option>
        <option>UK</option>
      </select>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirm}
        onChange={e => setConfirm(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;