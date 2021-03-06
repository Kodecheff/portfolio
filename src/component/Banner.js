import React from 'react';
import Typewriter from 'typewriter-effect';
import img from '../img/home-banner.jpg';
import '../css/banner.css'

const Banner = () => {
  return(
    <div className="banner">
     <div className="container">
      <div class="col-md-6 col-lg-6 col-sm-6 col-xs-12">
      <p className="banner content ">
        <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString('<span class="h5">Hi,</span><br />')
    .pauseFor(1500)
    .typeString('<span class="h3">I\'m Pascal </span>')
    .pauseFor(1500)
    .typeString('<br/>')
    .typeString('<span class="h1">Software Developer </span>')
    .changeCursor(' ')
    .start();
    }}
      />
      </p> 
    </div> 
    

    <div class="col-md-6 col-lg-6 col-sm-6 col-offset-sm col-xs-12">
      <span class="banner banner-img hidden-xs">
      <img src={img} alt="responsive-design" />
    </span>
    </div>
  </div>
  </div>
  )
}

export default Banner