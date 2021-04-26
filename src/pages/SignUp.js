import { Button, TextField } from "@material-ui/core";
import React, { useContext, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../App";
import { auth } from "../firebase";
import "./signup.css";

const SignUp = () => {
  const [signedInUser, setSignedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState();
  const emailRef = useRef(null);
  console.log(emailRef);
  const passwordRef = useRef(null);

  let { from } = location.state || { from: { pathname: "/" } };
  const register = (e) => {
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
        setSignedInUser(user.user);
        setSuccess(
          "User created successfully\nPlease login with your email and password"
        );
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setSuccess(" ");
      });
    e.preventDefault();
  };

  const signin = (e) => {
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((user) => {
        console.log(user);
        setSignedInUser(user.user);
        setError("");

        history.replace(from);
      })
      .catch((err) => {
        setError(err.message);
      });
    e.preventDefault();
  };

  return (
    <div className="signup">
      <div className="signup-input">
        <h2>Sign in</h2>

        <input
          ref={emailRef}
          id="filled-basic-signup"
          name="email"
          type="email"
          placeholder="Email Address"
          required
        />

        <input
          ref={passwordRef}
          id="filled-basic-signup"
          name="password"
          placeholder="Password"
          type="password"
          autoComplete="current-password"
        />
        {/* <TextField ref={emailRef}  id="filled-basic-signup" name="email" type="email" label="Email Address" variant="filled"/>
              
                 <TextField ref={passwordRef}  id="filled-basic-signup" name="password"  label="Password"
                    type="password"
                     autoComplete="current-password" variant="filled" /> */}

        <Button className="login-btn" type="submit" onClick={signin}>
          {" "}
          sign in
        </Button>

        <h4>
          New to NETFLIX ? <strong onClick={register}>Sign up now.</strong>{" "}
        </h4>
        <h4 style={{ color: "red", padding: "10px", lineHeight: 1.5 }}>
          {error}
        </h4>
        <h4 style={{ color: "green", padding: "10px", lineHeight: 1.5 }}>
          {success}
        </h4>
      </div>
    </div>
  );
};

export default SignUp;
