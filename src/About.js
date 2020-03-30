import React from 'react';
import Typewriter from 'typewriter-effect'
import Header from './component/Header';
import Nav from './component/Nav';
import './css/main.css';
// import img from './img/about-banner.png';

export default function About() {
  return (
    <div className="about-me">
      <Header />
      
      <div className="container about-banner ">
        <div className="mt-5 center-object ml-4 mr-4">
          <p>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('<span class="h3">About Me</span><br /><br />')
                .pauseFor(500)
                .typeString(`Hi! I'm Pascal Akunne, a Software developer based in Nigeria.
                 I'm interested in any freelancing/remote work. For further enquiries, 
                 contact me by clicking on any <span style="color: orangered">link</span> above.`)
                .changeCursor(' ')
                .start();
                }}
                  />
          </p>
        </div>
          
      </div>

      <Nav />
    </div>
  )
}
