import React from 'react';
import type { FC } from 'react';

const ArrowIcon: FC = () => (
  <div className="icon">
    <div className="icon-content">
      <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
        <g fill="none" stroke="#4671F6" strokeWidth="2.5" strokeLinejoin="round" strokeMiterlimit="10">
          <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
        </g>
      </svg>
      <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
        <g fill="none" stroke="#4671F6" strokeWidth="2.5" strokeLinejoin="round" strokeMiterlimit="10">
          <path
            className="arrow-icon--arrow"
            d="M 22.21,16.0 L 8.23,16.0 M 16.14,22.07 L 22.21,16.0 L 16.14,9.93"></path>
        </g>
      </svg>
    </div>
  </div>
);

export default ArrowIcon;
