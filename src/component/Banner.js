import React from 'react';
import './main.css';
import img from '../img/banner-img.png';

const Banner = () => {
  return(
    <div className="banner">
     <div class="container">
    <div class="row">
      <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
      <p class="banner content ">
        <span className="h5">Hi,</span><br />
        <span className="h3">I'm Pascal</span><br />
        <span className="h1">Software Developer</span>
      </p>
    </div>
    
    {/* <div class="clearfix visible-xs"></div> */}

    <div class="col-md-6 col-lg-6 col-sm-6 col-offset-sm col-xs-12">
      <span class="banner banner-img hidden-xs">
      <img src={img} alt="responsive-design" />
    </span>
    </div>
  </div>
  </div>
    </div>
  )
}

export default Banner