import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Auth.css";
import { useAuth } from "../../context";

export function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { token, loginUser } = useAuth();

  useEffect(() => {
    loginUser(loginForm.email, loginForm.password);
  }, [loginForm.email, loginForm.password]);

  if (token) {
    setTimeout(() => {
      navigate("/product");
    }, 100);
  }

  function loginHandler() {
    setLoginForm((form) => ({
      ...form,
      email: "rutvikumak@gmail.com",
      password: "rutvik123",
    }));
  }

  return (
    <div className="auth-container flex-center">
      <div className="auth-main-container flex-center">
        <div className="auth-title">
          <h2 className="text-center">Login</h2>
        </div>
        <form className="auth-main" onSubmit={(e) => e.preventDefault()}>
          <div className="auth-email">
            <label htmlFor="mail">Email Address</label>
            <input
              placeholder="test@gmail.com"
              className="text-input"
              type="text"
              value={loginForm.email}
              onChange={(e) =>
                setLoginForm((form) => ({ ...form, email: e.target.value }))
              }
              required
            />
          </div>

          <div className="auth-pwd">
            <label htmlFor="pwd">Password</label>
            <input
              placeholder="***********"
              className="pwd-input"
              type="password"
              value={loginForm.password}
              onChange={(e) =>
                setLoginForm((form) => ({ ...form, password: e.target.value }))
              }
              required
            />
          </div>

          <div className="auth-checkbox">
            <label className="select-input">
              <input
                type="checkbox"
                name="light"
                className="checkbox-input"
                value=""
              />
              <span className="text">Remember Me</span>
            </label>
            <a onClick={() => navigate("/forgetPwd")}>Forgot your Password?</a>
          </div>

          <div
            className="primary-btn text-center"
            onClick={() => {
              loginHandler();
            }}
          >
            Login with Test Credentials
          </div>

          <div className="auth-secondary-btn text-center">
            Create New Account{" "}
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </form>
      </div>
    </div>
  );
}
