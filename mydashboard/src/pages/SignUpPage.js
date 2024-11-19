import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUpPage.css";
import axios from "axios";
const SignUpPage = () => {
  // State variables for form data and validation
  const [formData, setFormData] = useState({
    fname: "",
    Lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Function to handle form submission
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:3001/api/auth/signup", formData);
      alert("Signup successful! Please login.");
    } catch (error) {
      console.error(error);
      alert("Error signing up. User may already exist.");
    }
  };
  return (
    <main>
      <div className="signup-container">
        <h2>Sign Up</h2>
        <p>
          Let‘s get you all set up so you can start <br /> creating your first
          account
        </p>

        <form action="#" onSubmit={handleSubmit}>
          <div className="name-fields">
            <div className="input-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="fname" // Add name attribute
                placeholder="Enter your first name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="Lname" // Add name attribute
                placeholder="Enter your last name"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email" // Add name attribute
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password" // Add name attribute
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword" // Add name attribute
              placeholder="Confirm your password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="terms">
            <label>
              <input type="checkbox" id="terms" required />I accept the{" "}
              <a href="#">terms & conditions</a>.
            </label>
          </div>

          <button type="submit" className="signup-btn">
            Sign Up
          </button>
          <p className="login-text">
            Already have an account?{" "}
            <Link to={"/LoginPage"} className="login-link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </main>
  );
};

export default SignUpPage;
