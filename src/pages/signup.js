import React from 'react';
import Layout from '../components/layout';
import Registration from '../components/shared/Authentication/registration';

const SignUp = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>Registrieren</h1>
      <Registration />
    </Layout>
  );
};

export default SignUp;
