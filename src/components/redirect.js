import React from 'react';

const Redirect = () => {
  if (typeof window !== 'undefined') {
    window.location = '/';
  }

  return null;
};

export default Redirect;
