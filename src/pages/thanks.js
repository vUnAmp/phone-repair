import { Link, navigate } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Redirect from '../components/redirect';

const Thanks = ({ location }) => {
  console.log(location);
  // const gobackHome = () => {
  //   navigate('/');
  // };
  // const { email } = props.email;
  return (
    <Layout>
      <div className="thanks">
        {location.state?.email ? (
          <span>
            Check your <strong>{location.state.email}</strong> to review Termin
          </span>
        ) : (
          <Redirect />
        )}
      </div>
    </Layout>
  );
};

export default Thanks;
