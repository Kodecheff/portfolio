import React from 'react';
import './main.css';
import {Link} from 'react-router-dom'

function Header() {
  return(
    <div className="header mt-2">
      {/* <span id="logo" class="float-left ml-3"><h2>Kodecheff</h2></span>

      <ul className="float-right mr-1">
        <li data-toggle="tooltip" data-placement="top" title="+2347017781541">Tel
        <i className="ion-android-call"></i></li>
        <li><a href="mailto:akunneemeka125@gmail.com">Email<i className="ion-email"></i></a></li>
        <li><a href="https://twitter.com/kodecheff">Twitter<i className="ion-social-twitter"></i></a></li>
        <li><a href="https://github.com/khaltech">Github<i className="ion-social-github"></i></a></li>
      </ul> */}


<nav
        className="navbar navbar-expand-md navbar-dark bg-black p-3"
        id="navbar"
      >
        <Link to="/" className="navbar-brand special">
          <h2>Kodecheff</h2>
        </Link>

        <button
          type="button"
          className="navbar-toggler "
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ml-auto">

          <li data-toggle="tooltip" data-placement="top" title="+2347017781541" className="nav-item nav-link active">
              Tel
              <i className="ion-android-call"></i></li>
           
              <li><a href="mailto:akunneemeka125@gmail.com" className="nav-item nav-link active">
              <i className="h4 fa fa-gmail"></i> Email
              </a></li>

            <li><a href="https://twitter.com/kodecheff" className="nav-item nav-link active">
            <i className="h4 fa fa-twitter"></i> Twitter
              </a></li>

            <li><a href="https://github.com/khaltech" className="nav-item nav-link active">
            <i className="h4 fa fa-github"></i> Github
              </a></li>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header;