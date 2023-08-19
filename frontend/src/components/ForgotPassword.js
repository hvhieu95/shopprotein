import React, { useState } from "react";
import Logo from "../image/logo.png";
import "../style/ForgotPassword.css";
import { Link } from "react-router-dom";

export function ForgotPassword() {
  // tạo biến trạng thái cho email
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi email đến API để xử lý đặt lại mật khẩu
    alert(`A reset link has been sent to ${email}`);
  };

  return (
    <div className="forgot-password-container">
      <img src={Logo} alt="logo" className="logo" />
      <div className="forgot-password-box">
        <h1>Forgot Password?</h1>
        <p style={{ textAlign: "left", color: "black" }}>
          Please enter your email address and we will send you a link to reset
          your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-group2">
            <label>Username or email</label>
            <input
              type="mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button className="reset-password-button"> Send Reset Link</button>
        </form>
        <div className="link2">
          <Link
            style={{ color: "#007bff", textDecoration: "none" }}
            to="/login"
          >
            {" "}
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
