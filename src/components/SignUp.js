import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { postUserApi } from '../redux/user/userAPI';
import '../styling/SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const createUserHandeler = (event) => {
    event.preventDefault();
    if (!name || !email || !password) return;
    const user = {
      name,
      email,
      password,
    };
    dispatch(postUserApi(user));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login">
      <h1>Sign Up</h1>
      <form className="login-form" onSubmit={createUserHandeler}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" value="add-tour">Register</button>
      </form>
      <div className="aditional-links">
        <h3>Do you have an account?</h3>
        <p>Just login!</p>
        <Link to="/Login">Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
