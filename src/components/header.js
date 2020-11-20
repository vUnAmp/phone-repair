import { Link, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useEffect, useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faBusinessTime,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import { AuthContext } from '../components/storeContext/AuthProvider';
import firebase from '../firebase/admin';

import './header.scss';
import './justdoit.scss';

const Header = ({ siteTitle }) => {
  const authContext = useContext(AuthContext);

  const [authenticated, setAuthenticated] = useState(authContext.authenticated);
  useEffect(() => {
    const checkAuth = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        authContext.authenticated = true;
        authContext.loadingAuthState = false;
        setAuthenticated(true);
        console.log('1 more times checking ... ?');
      }
      // console.log(authContext);
    });

    return () => {
      checkAuth();
    };
  }, []);
  const closeMenuBar = () => {
    document.getElementById('menubar-toggle').checked = false;

    // console.log(document.getElementById('menubar'));
  };
  console.log('render, render');
  return (
    <header>
      <div className="wrap-info">
        <div className="wrap-info__item info-address">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
          <span>
            Herzbergstraße 128-139 <br /> Halle 6 R606 10365 Berlin
          </span>
        </div>
        <div className="wrap-info__item info-phone">
          <a href="tel:+4915252686666">
            <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
            <span>
              Handy / Whatsapp <br />
              01525 2686666
            </span>
          </a>
        </div>
        <div className="wrap-info__item info-time">
          <FontAwesomeIcon icon={faBusinessTime} size="2x" />
          <span>
            <strong>MI-SO</strong> 10:00 - 19:00 <br />
            <strong>DI</strong> Geschlossen
          </span>
        </div>
      </div>
      <div className="wrap-header">
        <div className="wrap-logo">
          <Link to="/">
            <span className="blackflag">Repair</span>
            <span className="redflag">Phone</span>
            <span className="yellowflag">24</span>
          </Link>
          {/* <Weare /> */}
        </div>
        <div className="wrap-info__mobile">
          <div className="wrap__mobile-icon wrap__mobile-time">
            <input hidden type="checkbox" name="" id="mobile__toggle-time" />
            <label htmlFor="mobile__toggle-time">
              <FontAwesomeIcon icon={faBusinessTime} size="2x" />
            </label>
            <label htmlFor="mobile__toggle-time" className="overlay"></label>{' '}
            <div className="mobile-content mobile__time-content">
              <span>
                <strong>MI-SO</strong> 10:00 - 19:00 <br />
                <strong>DI</strong> Geschlossen
              </span>
            </div>
          </div>
          <div className="wrap__mobile-icon wrap__mobile-address">
            <input hidden type="checkbox" name="" id="mobile__toggle-address" />
            <label htmlFor="mobile__toggle-address">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
            </label>
            <label htmlFor="mobile__toggle-address" className="overlay"></label>{' '}
            <div className="mobile-content mobile__address-content">
              <span>
                Herzbergstraße 128-139 <br /> Halle 6 R606 10365 Berlin
              </span>
            </div>{' '}
          </div>
          <div className="wrap__mobile-icon wrap__mobile-phone">
            <input hidden type="checkbox" name="" id="mobile__toggle-phone" />
            <label htmlFor="mobile__toggle-phone">
              <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
            </label>
            <label htmlFor="mobile__toggle-phone" className="overlay"></label>{' '}
            <div className="mobile-content mobile__phone-content">
              <span>
                Handy / Whatsapp <br />
                01525 2686666
              </span>
            </div>{' '}
          </div>
        </div>

        <nav className="wrap-navlink">
          <ul>
            <li>
              {' '}
              <Link to="/"> Start </Link>{' '}
            </li>
            <li>
              <Link to="/termin">Termin</Link>{' '}
            </li>
            <li>
              <Link to="/aboutus"> Über uns</Link>{' '}
            </li>
          </ul>
          <div className="wrap-account">
            {authenticated ? (
              <div className="myaccount">
                <span>My Account</span>
                <span
                  onClick={() => {
                    console.log('signout');
                    firebase
                      .auth()
                      .signOut()
                      .then(() => {
                        setAuthenticated(false);
                        navigate('/');
                      });
                  }}
                >
                  <Link to="/">Logout</Link>
                </span>
              </div>
            ) : (
              <ul>
                <li>
                  <Link to="/signin"> Anmelden</Link>{' '}
                </li>
                <li>
                  <Link to="/signup"> Registrieren</Link>{' '}
                </li>
              </ul>
            )}
          </div>
        </nav>
        <div className="menubar-modal">
          <input hidden type="checkbox" name="" id="menubar-toggle" />
          <label htmlFor="menubar-toggle" className="menubar-icon-wrap">
            {/* <label htmlFor="menubar-toggle" className="menubar-icon"> */}
            <FontAwesomeIcon icon={faBars} size="2x" className="burger-menu" />
          </label>
          <label htmlFor="menubar-toggle" className="overlay"></label>
          <div className="menubar-modal-box" id="menubar">
            <div className="menubar-header">
              <div className="wrap-logo">
                <Link to="/">
                  <span className="blackflag">Repair</span>
                  <span className="redflag">Phone</span>
                  <span className="yellowflag">24</span>
                </Link>
                {/* <Weare /> */}
              </div>

              <label htmlFor="menubar-toggle" className="menubar-close">
                {' '}
                &#10005;
              </label>
            </div>
            <div className="wrap-account">
              {authenticated ? (
                <div className="myaccount">
                  <span>My Account</span>
                  <span
                    onClick={() => {
                      console.log('signout');
                      firebase
                        .auth()
                        .signOut()
                        .then(() => {
                          setAuthenticated(false);
                          navigate('/');
                        });
                    }}
                  >
                    <Link to="/">Logout</Link>
                  </span>
                </div>
              ) : (
                <ul>
                  <li
                    onClick={() => {
                      closeMenuBar();
                    }}
                  >
                    <Link to="/signin"> Anmelden</Link>{' '}
                  </li>
                  <li
                    onClick={() => {
                      closeMenuBar();
                    }}
                  >
                    <Link to="/signup"> Registrieren</Link>{' '}
                  </li>
                </ul>
              )}
            </div>
            <ul className="menubar-modal-wrap">
              <li
                onClick={() => {
                  closeMenuBar();
                }}
              >
                {' '}
                <Link to="/"> Start </Link>{' '}
              </li>
              <li
                onClick={() => {
                  closeMenuBar();
                }}
              >
                <Link to="/termin">Termin</Link>{' '}
              </li>
              <li
                onClick={() => {
                  closeMenuBar();
                }}
              >
                <Link to="/aboutus"> Über uns</Link>{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
