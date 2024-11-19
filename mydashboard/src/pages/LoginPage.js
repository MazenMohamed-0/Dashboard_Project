import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LoginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Admin credentials
  const admins = [
    { email: 'yapperadmin1@gmail.com', password: 'yapperadmin1' },
    { email: 'yapperadmin2@gmail.com', password: 'yapperadmin2' },
    { email: 'yapperadmin3@gmail.com', password: 'yapperadmin3' },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        formData
      );
      //On success, it stores the returned token (JWT) in the localStorage.
      localStorage.setItem("token", response.data.token);

      // Check if the logged-in user is an admin
      const isAdmin = admins.some(
        (admin) =>
          admin.email === formData.email && admin.password === formData.password
      );

      if (isAdmin) {
        // Redirect to Userlists page if the user is an admin
        navigate("/UserListPage");
      } else {
        // Redirect to ProfilePage if the user is not an admin
        navigate("/ProfilePage2");
      }
    } catch (error) {
      console.error("Axios error:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        alert(`Error: ${error.response.data.message || "Login failed."}`);
      } else {
        alert("Network error. Please try again later.");
      }
    }
  };

  return (
    <main>
      <div className="login-container">
        <h2>Log in</h2>
        <p>Welcome back, you've been missed!</p>
        <form action="#" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="options">
            <label className="remember-me">
              <input type="checkbox" id="remember-me"></input>
              Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="login-btn">
            Log in
          </button>
          <p className="signup-text">
            You haven’t any account? <Link to="/SignUpPage">Sign Up</Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
