import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/user/login", { email, password })
      .then((res) => {
          console.log(res.data);
          sessionStorage.setItem("userId", res.data.id)
          alert("Login successful!");
          navigate("/adminpage");
        }
      ).catch((err) => {
        console.log(err)
        alert("Invalid email or password");
    });
  };

  return (
    <div
      id="login"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info ">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;