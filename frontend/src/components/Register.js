import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../image/logo.png";
import EyeOpen from "../image/eyeopen.png";
import EyeClose from "../image/eyeclose.png";
import "../style/Register.css";

export function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="register-container">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="register-box">
        <h1>Create an Account</h1>
        <div className="input-group3">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email address"
            autoComplete="on"
            required
          />
        </div>
        <div className="input-group3">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <span className="toggle-password3" onClick={togglePasswordVisibility}>
            <img
              src={showPassword ? EyeClose : EyeOpen}
              alt="Toggle Password"
            />
          </span>
        </div>
        <div className="input-group3">
          <label>Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            required
          />
          <span
            className="toggle-password3"
            onClick={toggleConfirmPasswordVisibility}
          >
            <img
              src={showConfirmPassword? EyeClose : EyeOpen}
              alt="Toggle Password"
            />
          </span>
        </div>
        <button className="register-button">Create Account</button>
        <div className="alternative-login">
          <p>or</p>
          <button className="google-login">Login with Google</button>
          <button className="facebook-login">Login with Facebook</button>
          <button className="apple-login">Login with Apple</button>
        </div>
        <div className="login-link">
          If you already have an account, please <Link to="/login">Login</Link>.
        </div>
      </div>
      <Link to="/" className="go-home-link">
        Go to Home
      </Link>
    </div>
  );
}
