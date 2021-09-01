import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from './assets/signup.jpg';
//why can't i just put hook in here?

const cookies = new Cookies();

const initialState = {
  fullName: '',
  username: '',
  password: '',
  confirmPassword: '',
  phoneNumber: '',
  avatarURL: '',
};

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState(initialState);



  const handleChange = (event) => {
    //form on ... in so that the values will be aligned with the keys.
    //the first value seems to be needed to be fixed because that one is the value
    setForm({ ...form, [event.target.name]: event.target.value });
    // console.log(form);
  };

  const switchMode = () => {
    setIsSignup((prev) => !prev);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {fullName, username, password, phoneNumber, avatarURL} = form;

    const URL = 'http://localhost:3000/auth';

    const {data: {token, userId, hashedPassword}} = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {
      username, password, fullName, phoneNumber, avatarURL,
    })

    cookies.set('token', token);
    cookies.set('username', username);
    cookies.set('fullName', fullName);
    cookies.set('userId', userId);

    if(isSignup) {
      cookies.set('phoneNumber', phoneNumber);
      cookies.set('avatarURL', avatarURL);
      cookies.set('hashedPassword', hashedPassword);

    }

    window.location.reload();


  }

  return (
    <div className="auth__form-container">
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p>{isSignup ? 'Sign Up' : 'Sign in'}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="fullName">full name</label>
                <input
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="auth__form-container_fields-content_input">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>

            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="phoneNumber">phone number</label>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="avatarURL">Avatar URL</label>
                <input
                  name="avatarURL"
                  type="text"
                  placeholder="Avatar URL"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="auth__form-container_fields-content_input">
              <label htmlFor="password">password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>

            {isSignup && (
              <div className="auth__form-container_fields-content_input">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="auth__form-container_fields-content_button">
              <button>{isSignup ? "sign up": "Sign In"} </button>
            </div>
          </form>
          <div className="auth__form-container_fields-account">
            <p>
              {isSignup
                ? "ALready have an account"
                : "dont have an account"
              }
              <span onClick={switchMode}>
                {isSignup ? 'sign in' : 'sign up'}
              </span>
            </p>
          </div>
        </div>

      </div>
      <div className="auth__form-container_image">
        <img src={signinImage} alt="sign in" />
      </div>
    </div>
  );
};


export default Auth;