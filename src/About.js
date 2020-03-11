import React from 'react';
import Header from './component/Header';
import Nav from './component/Nav';
import './component/main.css';
import img from './img/about-banner.png';

export default function About() {
  return (
    <div>
      <Header />
      
      <div className="container about-banner ">
      <div className="mt-5 col-md-12 col-lg-12 col-sm-12 col-xs-12">
        <div className="mt-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <p className="h2">
            This is the portfolio of Pascal Akunne.<br />
            Software(web) Developer.
          </p>
        </div>
          <div class=" co l-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div class="">
            <img src={img} alt="banner" />
          </div>
        </div>
          <div className="clearfix"></div>
        </div>
      </div>

      <Nav />
    </div>
  )
}
