import React from 'react'
import Header from './component/Header';
import Nav from './component/Nav';

export default function Works() {
  return (
    <div>
      <Header />
      <div className="work-banner">
      <div class="container">
    <div class="row justify-content-center">

      <div className="myWork">
        <h2>Life track app</h2>
        <p>Life track is an app that keeps track of individual memorable 
          events.
          <a href="https://github.com/kodecheff/life-track">View Repo</a>
        </p>
      </div>
      <div className="myWork">
        <h2>Store api</h2>
        <p>An e-shopping api developed in Express, NodeJs and MongoDB</p>
        <a href="https://github.com/kodecheff/store-api">View Repo</a>
      </div>
      <div className="myWork">
        <h2>Mojin</h2>
        <p>A simple website template</p>
        <a href="https://github.com/kodecheff/khaldev">View Repo</a>
        <a href="https://khal.netlify.com">Visit site</a>
      </div>
      <div className="myWork">
        <h2>A simple calculator</h2>
        <p>A simple calculator developed in ReactJS</p>
        <a href="https://github.com/kodecheff/simple-calculator">View Repo</a>
      </div>
      <div className="myWork">
        <h2>Covid19 estimator</h2>
        <p>An estimator that shows the impact and severe impact of the 
          covid19 virus in a region.
        </p>
        <a href="https://github.com/kodecheff/covid19-estimator">View Repo</a>
      </div>
      <div className="myWork">
        <h2>A todo app</h2>
        <p>A simple todo app developed in ReactJS</p>
        <a href="https://github.com/kodecheff/todo-app">View Repo</a>
      </div>
      <div className="myWork">
        <h2>A weather app</h2>
        <p>A weather app developed in NodeJS</p>
        <a href="https://github.com/kodecheff/weather-app">View Repo</a>
        <a href="https://kodecheff-weather-app.herokuapp.com">Visit site</a>
      </div>
    </div>
    </div>
  </div>

  <Nav />
    </div>
  )
}
