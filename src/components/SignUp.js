import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postUserApi } from '../redux/user/userAPI';

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
    <div className="content">
      <h1>Sign Up</h1>
      <form className="signUpForm" onSubmit={createUserHandeler}>
        <input type="text" className="field" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" className="field" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" className="field" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" value="add-tour">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
