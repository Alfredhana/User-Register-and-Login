import logo from './logo.svg';
import './App.css';
import {react, useState} from 'react';
import Axios from 'axios';

function App() {
  const {userName, setUserName} = useState("");
  const {password, setPassword} = useState("");

  const register = () => {
    Axios.post("https://localhost:300/register", {
      userName: userName, 
      userPassword: password 
    }).then((response) => {
      console.log(response);
    })
  }

  return (
    <div className="App">
      <div className="regitration">
        <h1>
          Registration
        </h1>
        <label>Username</label>
        <input 
          type = "text"
          onChange = { (e) => {
            setUserName(e.target.value);
          }}
        />
        <label>Password</label>
        <input 
          type = "text"
          onChange = { (e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={register}>Register</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <input 
          type = "text"
          onChange = { (e) => {
            // On Change Functions
          }}
        />
        <input 
          type = "text"
          placeholder = "Input your user name..."
        />
        <input 
          type = "text"
          placeholder = "Input your login password..."
        />
      </div>
      <button>Register</button>
    </div>
  );
}

export default App;
