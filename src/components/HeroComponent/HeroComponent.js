import React from 'react';
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
            <a href="#about" className="btn btn-outline btn-xl js-scroll-trigger" id="ste-learn">Learn more</a>
          </div>
        </div>
        {/* <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  <img src={demoScreen1} className="img-fluid" alt="" />
                </div>
                <div className="button">
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </header>
};