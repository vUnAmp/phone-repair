/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { Carousel, Button, Container, Row, Col, Card } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCcPaypal,
  faDhl,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons';

import MessengerCustomerChat from 'react-messenger-customer-chat';

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

  return (
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
        <div>
          <MessengerCustomerChat
            pageId="101334158232115"
            appId="540304473573966"
          />
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
