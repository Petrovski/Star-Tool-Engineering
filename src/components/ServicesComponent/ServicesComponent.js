import React from 'react';
import './style.css';
import 'simple-line-icons/css/simple-line-icons.css';
// import demoScreen1 from '../../demo-screen-1.jpg';

export const ServicesComponent = (props) =>{
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="unmatched-services">Unmatched Services</h2>
          <hr id="services-hr" />
          <p className="text-muted">
            Check out what you can do with this app theme!
          </p>
        </div>
        <div className="row">
          {/* <div className="col-lg-4 my-auto">
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
          <div className="col-lg-10 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6" id="cnc-machining-box">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary" />
                    <h3 className="services-h3">CNC</h3>
                    <p className="services-info-text" id="services-text-id">
                      -- CNC text here --
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item" id="milling-box">
                    <i className="icon-camera text-primary" />
                    <h3 className="services-h3">Milling</h3>
                    <p className="services-info-text" id="services-text-id">
                      -- Milling text here --
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item" id="turning-box">
                    <i className="icon-present text-primary" />
                    <h3 className="services-h3">Turning</h3>
                    <p className="services-info-text" id="services-text-id">
                      -- Turning Machining text here --
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item" id="prototype-box">
                    <i className="icon-lock-open text-primary" />
                    <h3 className="services-h3">Prototype</h3>
                    <p className="services-info-text" id="services-text-id">
                      -- Protoype text here --
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};