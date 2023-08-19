import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../image/logo.png";
import "../style/login.css";
import EyeOpen from "../image/eyeopen.png";
import EyeClose from "../image/eyeclose.png";

export function Login() {
  // tạo biến trạng thái hiển thị passwords
  const [showPassword, setShowPassword] = useState(false);
  // hàm chuyển đổi trạng thái hiển thị passwords
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="login-box">
        <h1>Login</h1>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your mail address" required />
        </div>
        <div className="input-group">
          <label>Password</label>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            <img
              src={showPassword ? EyeClose : EyeOpen}
              alt="Toggle Password"
            />
          </span>
        </div>

        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
        <div className="links">
          <Link to="/ForgotPassword">Forgot Password?</Link>
          <Link to="/Register">Create an Account</Link>
        </div>
      </div>
      <Link to="/" className="go-home-link">
        Go to Home
      </Link>
    </div>
  );
}
