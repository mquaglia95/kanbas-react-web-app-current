import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/kanbas/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <p>Username:</p>
      <input
        value={credentials.username}
        className="form-control"
        onChange={(e) => setCredentials({
          ...credentials,
          username: e.target.value })} />
      <p>Password:</p>
      <input
        value={credentials.password}
        className="form-control"
        onChange={(e) => setCredentials({
          ...credentials,
          password: e.target.value })} />
      <button type="button" className="btn btn-info w-100" onClick={signup}>
        Signup
      </button>
    </div>
  );
}
export default Signup;