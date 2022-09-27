import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAPI } from '../redux/user/userAPI';
import '../styling/login.css';

const Login = () => {
  const user = useSelector((store) => store.user);
  const [value, setValue] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const onChange = (e) => {
    const newValue = { ...value, [e.target.id]: e.target.value };
    setValue(newValue);
  };
  const navigate = useNavigate();
  const Login = (e) => {
    e.preventDefault();
    dispatch(LoginAPI(value));
  };

  useEffect(() => {
    if (user.length > 0) {
      navigate('/');
    }
  }, [navigate, user]);

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div className="login">
      <h1>Welcome!!!</h1>
      <form className="login-form" onSubmit={Login} action="">
        <input type="email" id="email" placeholder="Email" onChange={onChange} required />
        <input type="password" id="password" placeholder="Password" onChange={onChange} required />
        <button type="submit">Login</button>
      </form>
      <div className="aditional-links">
        <h3>Don&apos;t you have an account yet?</h3>
        <p>Just create one!</p>
        <Link to="/SignUp">Create Account</Link>
      </div>
    </div>
  );
};

export default Login;
