import React from 'react';
import ClientsCarousel from './ClientsCarousel';
import './style.css';

 export const AboutUsComponent = (props) => {
  return (
    <section className="download text-center " id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading about-us">
              About Us
            </h2>
            <p>
              <span>Star Tool Engineering</span> is a manufacturing company specializing in 
            </p>
          </div>
        </div>
        <div className="row">
          <ClientsCarousel />
        </div>
      </div>
    </section>
  ); 
};