import React from "react";
import "./Auth.css";
export function Login() {
  return (
    <div class="auth-container flex-center">
      <div class="auth-main-container flex-center">
        <div class="auth-title">
          <h2 class="text-center">Login</h2>
        </div>
        <div class="auth-main">
          <div class="auth-email">
            <label for="mail">Email Address</label>
            <input
              placeholder="test@gmail.com"
              class="text-input"
              type="text"
            />
          </div>

          <div class="auth-pwd">
            <label for="pwd">Password</label>
            <input
              placeholder="***********"
              class="pwd-input"
              type="password"
            />
          </div>

          <div class="auth-checkbox">
            <label class="select-input">
              <input
                type="checkbox"
                name="light"
                class="checkbox-input"
                value=""
              />
              <span class="text">Remember Me</span>
            </label>
            <a href="./forget-pwd.html">Forgot your Password?</a>
          </div>

          <div class="primary-btn text-center">
            <a href="#" target="_blank" class="link-btn">
              Login
            </a>
          </div>

          <div class="auth-secondary-btn text-center">
            <a href="./signup.html">
              Create New Account{" "}
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
