import { navigate } from 'gatsby';
import React, { useState } from 'react';
import firebase from '../../../firebase/admin';
import './authform.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIN = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert('Password mindestens 6 Zeichen');
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        alert('Successfully Login');
        navigate('/');
      })
      .catch((error) => {
        alert(`${error.message}`);
      });
  };

  return (
    <div className="formWrapper">
      <form action="">
        <label htmlFor="email"></label>
        <input
          id="email"
          className="inputForm"
          type="email"
          name="email"
          id=""
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email Adresse"
          required
        />
        <label htmlFor="password"></label>
        <input
          id="password"
          className="inputForm"
          type="password"
          name="password"
          id=""
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Passwort"
          required
        />
        <input
          className="form-submit"
          type="submit"
          value="SIGN-IN"
          onClick={handleSignIN}
        />
      </form>
    </div>
  );
};

export default Login;
