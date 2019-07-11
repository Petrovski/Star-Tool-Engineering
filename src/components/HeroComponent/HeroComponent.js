import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './style.css';
import '../../device-mockups/device-mockups.css';

export const HeroComponent = (props) => {
  return <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5 w3-animate-top">Where passion drives performance.</h1>
            <div className="welcome-ste w3-container w3-center w3-animate-bottom welcome-ste">
              <p className="welcome-text">Welcome to <span className="ste-text">Star Tool Engineering</span>. Proudly in business for 20+ years, we strive to provide quality machined parts and on-time delivery.</p>
            </div>
            <Link to="#about" className="btn btn-outline btn-xl js-scroll-trigger" id="ste-learn" smooth="easeInOutQuart" duration={1000}>Learn more</Link>
          </div>
        </div>
      </div>
    </div>
  </header>
};