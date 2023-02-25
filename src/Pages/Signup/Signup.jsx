import React from "react";
import "./Signup.scss"

const Signup = () => {
  return (
    <div className="signup">
      <form>
        <div className="label-logic">
          <label htmlFor="firstName">First Name :</label>
          <input id="first-name" name="firstName" placeholder="Enter your first name" />
        </div>
        <div className="label-logic">
          <label htmlFor="LastName">Last Name :</label>
          <input id="last-name" name="LastName" placeholder="Enter your last name" />
        </div>
        <div className="label-logic">
          <label htmlFor="email">Email :</label>
          <input id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="label-logic">
          <label htmlFor="password">Password :</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="label-logic">
          <label htmlFor="confirm-password">Confirm Password :</label>
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            placeholder="confirm password"
          />
        </div>
        <input type="submit" placeholder="Submit" />
      </form>
    </div>
  );
};

export default Signup;
