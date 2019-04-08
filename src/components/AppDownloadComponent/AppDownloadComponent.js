import React, { Component } from 'react';
import './style.css';

 export const AppDownloadComponent = (props) => {
  return (
    <section className="download text-center " id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              About Us Component
            </h2>
            <p>
              Our app is available on any mobile device! Download now to get
              started!
            </p>
          </div>
        </div>
      </div>
    </section>
  ); 
};