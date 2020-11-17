import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faBusinessTime,
} from '@fortawesome/free-solid-svg-icons';
import './kontakt.scss';

export const Address = () => {
  return (
    <div className="kontakt__items kontakt__items-address">
      <div className="kontakt__icon">
        <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
      </div>
      <div className="kontakt__content">
        <span>
          Herzbergstraße 128-139 <br /> Halle 6 R606 10365 Berlin
        </span>
      </div>
    </div>
  );
};
export const Handy = () => {
  return (
    <div className="kontakt__items kontakt__items-handy">
      <div className="kontakt__icon">
        <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
      </div>
      <div className="kontakt__content">
        <span>
          Handy / Whatsapp <br />
          01525 2686666
        </span>
      </div>
    </div>
  );
};
export const OpenTime = () => {
  return (
    <div className="kontakt__items kontakt__items-address">
      <div className="kontakt__icon">
        <FontAwesomeIcon icon={faBusinessTime} size="2x" />
      </div>
      <div className="kontakt__content">
        <span>
          <strong>MI-SO</strong> 10:00 - 19:00 <br />
          <strong>DI</strong> Geschlossen
        </span>
      </div>
    </div>
  );
};
