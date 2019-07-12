import React, { useState, useEffect } from 'react';
import Modal from './Modal/Modal';
import useModal from './Modal/useModal';
import './style.css';
import 'simple-line-icons/css/simple-line-icons.css';

export const ServicesComponent = (props) => {

  const [hoveredOne, setHoveredOne] = useState(false);
  const [hoveredTwo, setHoveredTwo] = useState(false);
  const [hoveredThree, setHoveredThree] = useState(false);
  const [hoveredFour, setHoveredFour] = useState(false);
  const toggleHoverOne = () => setHoveredOne(!hoveredOne);
  const toggleHoverTwo = () => setHoveredTwo(!hoveredTwo);
  const toggleHoverThree = () => setHoveredThree(!hoveredThree);
  const toggleHoverFour = () => setHoveredFour(!hoveredFour);

  const {isShowing, toggle} = useModal();


  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2 className="unmatched-services">Unmatched Services</h2>
          <p className="">
            Please see below for our primary services offered. We offer much more than this.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item" id="cnc-machining-box" onClick={toggle} onMouseEnter={toggleHoverOne} onMouseLeave={toggleHoverOne}>
                    <h3 className="services-h3">CNC</h3>
                    <p className="services-info-text" id="services-text-id">
                      Learn More
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item" id="milling-box" onClick={toggle} onMouseEnter={toggleHoverTwo} onMouseLeave={toggleHoverTwo}>
                    <h3 className="services-h3">Milling</h3>
                    <p className="services-info-text" id="services-text-id">
                      Learn More
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item" id="turning-box" onClick={toggle} onMouseEnter={toggleHoverThree} onMouseLeave={toggleHoverThree}>
                    <h3 className="services-h3">Turning</h3>
                    <p className="services-info-text" id="services-text-id">
                      Learn More
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item" id="prototype-box" onClick={toggle} onMouseEnter={toggleHoverFour} onMouseLeave={toggleHoverFour}>
                    <h3 className="services-h3">Prototype</h3>
                    <p className="services-info-text" id="services-text-id">
                      Learn More
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