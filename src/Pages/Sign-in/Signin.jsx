import React, { useState } from "react";
import { signInWithGoogle } from "../../firebase/firebase";
import "./signin.scss";
const Signin = () => {
  const [signin, setSigin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSigin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(signin);
    setSigin({
      email: "",
      password: "",
    });
  };

  return (
    <div className="signin">
      <div className="form">
        <h1 className="title-login">log in to TestedShop</h1>
        <div className="label-logic">
          <label htmlFor="email">Email :</label>
          <input
            id="email"
            type="email"
            required
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={signin.email}
          />
        </div>
        <div className="label-logic">
          <label htmlFor="password">Password :</label>
          <input
            id="password"
            type="password"
            required
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={signin.password}
          />
        </div>
      </div>
      <div className="signin-btns">
        <button className="submit-btn" onClick={onSubmit}>
          sign in
        </button>
        <button className="submit-btn btn-google" onClick={signInWithGoogle}>
          sign up with google
        </button>
      </div>
    </div>
  );
};

export default Signin;
