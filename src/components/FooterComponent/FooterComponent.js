import React from 'react';
import './style.css';

export const FooterComponent = (props) =>{
  return <footer>
    <div className="container">
      <p className="ste-footer">&copy; 2019 Star Tool Engineering. All Rights Reserved.</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="#">Privacy</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Terms</a>
        </li>
        <li className="list-inline-item">
          <a href="#">FAQ</a>
        </li>
      </ul>
    </div>
  </footer>
};