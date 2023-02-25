import React, {useState} from "react";
import "./Signup.scss"

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  return (
    <div className="signup">
      <form>
        <div className="label-logic">
          <label htmlFor="firstName">First Name :</label>
          <input id="first-name" name="firstName" placeholder="Enter your first name"  required/>
        </div>
        <div className="label-logic">
          <label htmlFor="LastName">Last Name :</label>
          <input id="last-name" name="LastName" placeholder="Enter your last name" required />
        </div>
        <div className="label-logic">
          <label htmlFor="email">Email :</label>
          <input id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="label-logic">
          <label htmlFor="password">Password :</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="label-logic">
          <label htmlFor="confirm-password">Confirm Password :</label>
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            placeholder="confirm password"
            required
          />
        </div>
        <input type="submit" placeholder="Submit" className="submit-btn"/>
        <span className="login-link">already have an account login</span>
      </form>
    </div>
  );
};

export default Signup;
