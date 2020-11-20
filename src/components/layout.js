/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { Row, Col } from 'react-bootstrap';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCcPaypal,
//   faDhl,
//   faPaypal,
// } from '@fortawesome/free-brands-svg-icons';
import { AuthContext } from '../components/storeContext/AuthProvider';
// import MessengerCustomerChat from 'react-messenger-customer-chat';
import firebase from '../firebase/admin';

// import { AuthContext } from './storeContext/AuthProvider';

import Header from './header';
import './layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const authContext = useContext(AuthContext);

  return (
    // <AuthContext.Provider>
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="wrap-main">
        <main>{children}</main>
        <footer>
          <div className="wrap-footer">
            <Row>
              <Col sl="12" md="6">
                <span>
                  Copyright ©{new Date().getFullYear()}
                  <br />
                  PhoneABC GmbH
                  <br />
                  Herzbergstr. 33-34 10365 Berlin
                </span>
              </Col>
              <Col sl="12" md="6" className="wrap-partner">
                <div className="partnerlogodhl partnerlogo"></div>
                <div className="partnerlogopaypal partnerlogo"></div>
              </Col>
            </Row>
          </div>
        </footer>
        {/* <div>
          <MessengerCustomerChat
            pageId="101334158232115"
            appId="540304473573966"
          />
        </div> */}
      </div>
    </>
    // </AuthContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
