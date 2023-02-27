import React, { useState } from "react";
import "./Signup.scss";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate()

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userDetails.password !== userDetails.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setUserDetails({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    console.log(userDetails);
    // Make an API call to submit the form data to a backend server
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <div className="label-logic">
          <label htmlFor="firstName">First Name :</label>
          <input
            id="first-name"
            name="firstName"
            placeholder="Enter your first name"
            value={userDetails.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label-logic">
          <label htmlFor="lastName">Last Name :</label>
          <input
            id="last-name"
            name="lastName"
            placeholder="Enter your last name"
            value={userDetails.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label-logic">
          <label htmlFor="email">Email :</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            value={userDetails.email}
            onChange={handleChange}
          />
        </div>
        <div className="label-logic">
          <label htmlFor="password">Password :</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
            value={userDetails.password}
            onChange={handleChange}
          />
        </div>
        <div className="label-logic">
          <label htmlFor="confirmPassword">Confirm Password :</label>
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
            required
            value={userDetails.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <input type="submit" className="submit-btn" placeholder="Submit" />
        <span className="login-link" onClick={() => navigate("/signin") }>Already have an account? Login</span>
      </form>
      
    </div>
  );
};

export default Signup;
