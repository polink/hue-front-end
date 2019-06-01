import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
        <h1>Login</h1>
        <form onSubmit="{this.handleSubmit}">
          <input
              name='username'
              placeholder='username'
              type='text'
              value='{this.state.username}'
              onChange='{this.handleChange}'
          />
          <input
              name='password'
              placeholder='password'
              type='password'
              value='{this.state.password}'
              onChange='{this.handleChange}'
          />
          <button type='submit'>Login</button>
        </form>
      </div>
  );
}

export default App;
