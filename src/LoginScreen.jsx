import React from 'react';

export default function LoginScreen(props) {
  return (
    <div className="loginBox">
      <h1>Login Form</h1>
      <form className="form">
        <div className="field">
          <label for="uname"> Username: </label>
          <input
            id="uname"
            name="uname"
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div className="field">
          <label for="pass"> Password: </label>
          <input
            id="pass"
            name="pass"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
