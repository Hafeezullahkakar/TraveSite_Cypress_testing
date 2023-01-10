import React from 'react';
import image from "../assets/1.jpg"
import "./Login.css";
import 'material-symbols';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login-body'>

      <div class="login">
        <div class="avatar">
          <img alt='avatar' src={image} />
        </div>
        <h2>Login</h2>
        <h3>Welcome back</h3>

        <form class="login-form">
          <div class="textbox">
            <input className='email' type="email" placeholder="Username" />
            <span class="material-symbols-outlined"> account_circle </span>
          </div>
          <div class="textbox">
            <input className='pass' type="password" placeholder="Password" />
            <span class="material-symbols-outlined"> lock </span>
          </div>
          <button type="submit">
            <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
              LOGIN
            </Link>
          </button>
          <p>Don't Have an Account? </p>
          <a href="/signup">Signup Here</a>
        </form>
      </div>
    </div>


    // <div className="from-container">
    // <h1>Send a message to us!</h1>
    // <form>
    //     <input placeholder="Name"/>
    //     <input placeholder="Email"/>
    //     <input placeholder="Subject"/>
    //     <textarea placeholder="Message" rows="4"></textarea>
    //     <button>Send Message</button>

    // </form>
    // </div>

  )
}
