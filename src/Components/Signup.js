import React from "react";
import { Link } from "react-router-dom";
import pic from "../assets/logo.svg";
import "./Signup.css"

export default function Signup() {
  return (
    <div className="body">
      <div class="background"></div>
      <div class="card">
        <img class="logo" alt="logo" src={pic} />
        <h2>Create Account</h2>
        <form class="form">
          <input className="nameTxt" type="text" placeholder="Name" />
          <input className="emailTxt" type="email" placeholder="Email" />
          <input className="passwordTxt" type="password" placeholder="Password" />
          <button className="signup" type="submit">
            <Link to='/' style={{textDecoration:'none', color:'#fff'}}>
            SIGN UP
             </Link>
            </button>
        </form>
        <footer>
          Existing users, sign in 
          <a href="/login"> here</a>
        </footer>
      </div>
    </div>
  );
}
