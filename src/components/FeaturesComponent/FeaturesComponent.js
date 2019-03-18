import React from 'react';
import './style.css';
import 'simple-line-icons/css/simple-line-icons.css';
import demoScreen1 from '../../demo-screen-1.jpg';

export const FeaturesComponent = (props)=>{
  return <section className="features" id="features">
    <div className="container">
      <div className="section-heading text-center">
        <h2>Unmatched Services</h2>
        <hr id="services-hr"/>
        {/* <p className="text-muted">Check out what you can do with this app theme!</p> */}
      </div>
      <div className="row">
        <div className="col-lg-4 my-auto">
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
        </div>
        <div className="col-lg-8 my-auto">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-screen-smartphone text-primary"></i>
                  <h3>CNC Machining</h3>
                  <p className="text-muted">-- CNC Machining text here --</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-camera text-primary"></i>
                  <h3>Milling</h3>
                  <p className="text-muted">-- Milling text here --</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-present text-primary"></i>
                  <h3>Turning</h3>
                  <p className="text-muted">-- Turning Machining text here --</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="feature-item">
                  <i className="icon-lock-open text-primary"></i>
                  <h3>Wire EDM</h3>
                  <p className="text-muted">-- Wire EDM Machining text here --</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
};