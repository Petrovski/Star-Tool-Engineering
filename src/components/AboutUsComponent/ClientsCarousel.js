import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css'
 
class ClientsCarousel extends Component {
    render() {
      return (
        <Carousel 
          autoPlay={true} 
          infiniteLoop={true} 
          transitionTime={500} 
          interval={2500}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={33.3}
          stopOnHover={false}
        >
          <div className="carousel-container">
            <img src="http://eblast.bnpmedia.com/EVENTS/TAS18/TAS18_Invites/Images/Fori-Logo.gif" />
          </div>
          <div>
            <img src="https://lh3.googleusercontent.com/NGPrjka2ai0w7sfhxkxCwtOSh2wVyEZMdtrVxI4vrA22ebA_fcyl9PSvhTaCYXSWh0A68ZhvXhVZ4U-Nnp3v9IfoXg5o5H1tjjK97cs" />
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Ford_Motor_Company_Logo.svg/1280px-Ford_Motor_Company_Logo.svg.png" />
          </div>
          <div>
            <img src="https://www.gm.com/etc/designs/gbs/components/topbar/img/gmcom/gm_logo.jpg" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Thyssenkrupp_AG_Logo_2015.svg/1200px-Thyssenkrupp_AG_Logo_2015.svg.png" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <img src="https://lh3.googleusercontent.com/NGPrjka2ai0w7sfhxkxCwtOSh2wVyEZMdtrVxI4vrA22ebA_fcyl9PSvhTaCYXSWh0A68ZhvXhVZ4U-Nnp3v9IfoXg5o5H1tjjK97cs" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <img src="https://www.vmalcreative.co.uk/wp-content/uploads/2015/09/template4-1.png" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div>
            <img src="https://www.minicar-erkelenz.com/img/logo_hegenscheidt.png" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
        );
    }
};

const carouselStyles = {
  height: '100px'
}

export default ClientsCarousel;