import React from 'react';
import Nav from './nav';

export default function Login({ location }) {
  const { oldLocation } = location.sate;
  return (
    <>
      {oldLocation == null && <Nav />}
      <form>
        <h2>Login</h2>
        <div>
          <label>
            Username
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            password
            <input type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
}
