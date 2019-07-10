import React, { useState, useEffect } from 'react';
import Modal from './Modal/Modal';
import useModal from './Modal/useModal';
import './style.css';
import 'simple-line-icons/css/simple-line-icons.css';

export const ServicesComponent = (props) => {

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const {isShowing, toggle} = useModal();


  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="unmatched-services">Unmatched Services</h2>
          <hr id="services-hr" />
          <p className="text-muted">
            Please see below for our primary services offered. We offer much more than this.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-10 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item" id="cnc-machining-box" onClick={toggle} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                    <i className="icon-screen-smartphone text-primary" />
                    <h3 className="services-h3">CNC</h3>
                    <button 
                      className={hovered ? '' : 'services-button-hide'}
                    >
                        Learn More
                    </button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item" id="milling-box" onClick={toggle} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                    <i className="icon-camera text-primary" />
                    <h3 className="services-h3">Milling</h3>
                    <p className="services-info-text" id="services-text-id">
                      <button
                        className={hovered ? 'pulse animated' : ''}
                        onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover}
                      >
                        Learn More
                    </button>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item" id="turning-box" onClick={toggle}>
                    <i className="icon-present text-primary" />
                    <h3 className="services-h3">Turning</h3>
                    <p className="services-info-text" id="services-text-id">
                      <button
                        className={hovered ? 'pulse animated' : ''}
                        onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover}
                      >
                        Learn More
                    </button>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item" id="prototype-box" onClick={toggle}>
                    <i className="icon-lock-open text-primary" />
                    <h3 className="services-h3">Prototype</h3>
                    <p className="services-info-text" id="services-text-id">
                      <button
                        className={hovered ? 'pulse animated' : ''}
                        onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover}
                      >
                        Learn More
                    </button>
                    </p>
                  </div>
                </div>
              </div>
              <Modal isShowing={isShowing} hide={toggle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};