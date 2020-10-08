import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Signin.css";
export default function Signin() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const history = useHistory();
  const loginuser = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        return history.replace("/insta");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="register">
      <h3>
        𝕽𝖊𝖌𝖎𝖘𝖙𝖊𝖗 𝖋𝖔𝖗 <b>Instagram</b>
      </h3>

      <div className="register__container">
        <form onSubmit={loginuser}>
          <h3>Email</h3>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
          />
          <h3>Name</h3>
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            type="text"
          />
          <h3>Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
          />

          <button type="submit">Register</button>
        </form>
      </div>
      <Link className="register__login" to="/login">
        have an account ?
      </Link>
    </div>
  );
}
