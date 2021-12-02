import React, { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase";

function Login() {
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const history = useHistory();
  const signin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        LoginEmail,
        LoginPassword
      );
      console.log(user);
      history.push("/homepage");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="loginPage">
        <h1 style={{ color: "white" }}>Welcome To Login Page</h1>
        <form className="loginBox" onSubmit={handleSubmit}>
          <div className="inputField">
            <p>Enter Your Email:</p>
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => {
                setLoginEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className="inputField">
            <p>Enter Your Password:</p>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
            ></input>
          </div>
          <p style={{ fontSize: ".7rem" }}>
            By continuing, you agree to Yourkart's Terms of Use and Privacy
            Policy.
          </p>
          <button
            className="submitButton"
            onClick={() => {
              signin();
            }}
          >
            Log In
          </button>
        </form>
        <div className="SignUp" style={{ color: "orange" }}>
          <span>New To YourCart? </span>
          <span>
            <Link style={{ color: "orange" }} to="/register">
              Sign Up
            </Link>
          </span>
        </div>
        <div className="SignUp">
          <Link to="/homepage">
            <span style={{ color: "white" }}>Skip Logging In</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
