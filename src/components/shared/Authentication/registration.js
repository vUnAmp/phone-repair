import { navigate } from 'gatsby';
import React, { useState } from 'react';

import firebase from '../../../firebase/admin';
import './authform.scss';

const Registraion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const handleSignUP = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert('Password mindestens 6 Zeichen');
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        alert('Successfully registration account');
        navigate('/');
      })
      .catch((error) => {
        alert(`${error.message}`);
      });
  };
  return (
    <div className="formWrapper">
      <form action="">
        <label htmlFor="name"></label>
        <input
          id="name"
          className="inputForm"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Benutzername"
          required
        />
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
          value="SIGN-UP"
          onClick={handleSignUP}
        />
      </form>
    </div>
  );
};

export default Registraion;
