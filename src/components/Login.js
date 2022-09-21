import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginAPI } from '../redux/user/userAPI';
import '../styling/login.css';

const Login = () => {
  const [value, setValue] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const onChange = (e) => {
    const newValue = { ...value, [e.target.id]: e.target.value };
    setValue(newValue);
  };
  const Login = (e) => {
    e.preventDefault();
    dispatch(LoginAPI(value));
  };
  return (
    <div className="login">
      <h1>Welcome!!!</h1>
      <form className="login-form" onSubmit={Login} action="">
        <input type="email" id="email" placeholder="Email" onChange={onChange} required />
        <input type="password" id="password" placeholder="Password" onChange={onChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
