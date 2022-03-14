import React from "react";
import "./Auth.css";
export function Signup() {
  return (
    <div class="auth-container flex-center">
      <div class="auth-main-container flex-center">
        <div class="auth-title">
          <h2 class="text-center">Sign Up</h2>
        </div>
        <div class="auth-main">
          <div class="first-last-wrapper">
            <div class="auth-firstname">
              <label for="firstname">First Name</label>
              <input placeholder="Test" class="text-input" type="text" />
            </div>
            <div class="auth-lastname">
              <label for="lastname">Last Name</label>
              <input placeholder="Admin" class="text-input" type="text" />
            </div>
          </div>
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
              <span class="text">I accept all Terms & Conditions</span>
            </label>
          </div>
          <div class="primary-btn text-center">
            <a href="#" target="_blank" class="link-btn">
              Create New Account
            </a>
          </div>
          <div class="auth-secondary-btn text-center">
            <a href="./login.html">
              Already have an account{" "}
              <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
