import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();
  const loginuser = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        return history.replace("/insta");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="l">
      <div className="login">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <form onSubmit={loginuser}>
          <h4>Email</h4>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
          />
          <h4>Password</h4>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
          />
          <button type="submit" className="login__submit">
            Login
          </button>
        </form>
      </div>
      <div>
        <Link className="login__register" to="/signin">
          don't have account ?
        </Link>
      </div>
    </div>
  );
}
