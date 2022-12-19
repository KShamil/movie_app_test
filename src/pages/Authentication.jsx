import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userData from "../data/userData";

const Authentication = () => {
  const [UserName, setUserName] = useState();
  const [pass, setPass] = useState();
  const [text, setText] = useState();
  const navigate = useNavigate();

  const formSubmit = (event) => {
    event.preventDefault();
    if (!UserName || !pass) {
      setText("Fill in the input");
    } else {
      setText("");
      if (userData.username === UserName && userData.password === pass) {
        navigate("/dashboard");
      } else {
        setText("Login or password is wrong");
      }
    }
  };
  return (
    <div className="authentication-container">
      <div className="box">
        <form onSubmit={formSubmit} className="form">
          <h2>Sign in</h2>
          <h6>{text}</h6>
          <div className="inputBox">
            <input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              type="text"
              required="required"
            />
            <span>Username</span>
            <i></i>
          </div>
          <div className="inputBox">
            <input
              onChange={(e) => {
                setPass(e.target.value);
              }}
              type="password"
              required="required"
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <Link className="link">Forgot password</Link>
            <Link className="link">Singup</Link>
          </div>
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
