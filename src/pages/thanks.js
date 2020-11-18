import { navigate } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const thanks = ({ location }) => {
  console.log(location);
  // const { email } = props.email;
  return (
    <Layout>
      <div className="thanks">
        {location.state?.email ? (
          <span>
            Check your <strong>{location.state.email}</strong> to review Termin
          </span>
        ) : (
          navigate('/')
        )}
      </div>
    </Layout>
  );
};

export default thanks;
