import React from 'react';
import Layout from '../components/layout';
import Login from '../components/shared/Authentication/login';

const SignIn = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>Anmelden</h1>
      <Login />
    </Layout>
  );
};

export default SignIn;
