import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faBusinessTime,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import './header.scss';
const Header = ({ siteTitle }) => (
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
            <Link to="/howitwork"> Gửi thiết bị </Link>{' '}
          </li>
          <li>
            <Link to="/termin">Termin</Link>{' '}
          </li>
          <li>
            <Link to="/contact"> Liên hệ</Link>{' '}
          </li>
          <li>
            <Link to="/aboutus"> Giới thiệu</Link>{' '}
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>{' '}
          </li>
        </ul>
      </nav>
      <div className="menubar-modal">
        <input hidden type="checkbox" name="" id="menubar-toggle" />
        <label htmlFor="menubar-toggle" className="menubar-icon-wrap">
          {/* <label htmlFor="menubar-toggle" className="menubar-icon"> */}
          <FontAwesomeIcon icon={faBars} size="2x" className="burger-menu" />
        </label>
        <label htmlFor="menubar-toggle" className="overlay"></label>
        <div className="menubar-modal-box">
          <div className="menubar-header">
            <Link className="menubar-home" to="/">
              Home
            </Link>

            <label htmlFor="menubar-toggle" className="menubar-close">
              {' '}
              &#10005;
            </label>
          </div>
          <ul className="menubar-modal-wrap">
            <li>
              {' '}
              <Link to="/howitwork"> Gửi thiết bị </Link>{' '}
            </li>
            <li>
              <Link to="/termin">Termin</Link>{' '}
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>{' '}
            </li>
            <li>
              <Link to="/contact"> Liên hệ</Link>{' '}
            </li>
            <li>
              <Link to="/aboutus"> Giới thiệu</Link>{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
