import React from 'react';
import './main.css';

const Header = () => {
  return(
    <div className="header mt-2">
      <span id="logo" class="float-left ml-3"><h2>Kodecheff</h2></span>

      <ul className="float-right mr-1">
        <li data-toggle="tooltip" data-placement="top" title="+2347017781541">Tel
        <i className="ion-android-call"></i></li>
        <li><a href="mailto:akunneemeka125@gmail.com">Email<i className="ion-email"></i></a></li>
        <li><a href="https://twitter.com/kodecheff">Twitter<i className="ion-social-twitter"></i></a></li>
        <li><a href="https://github.com/khaltech">Github<i className="ion-social-github"></i></a></li>
      </ul>

    </div>
  )
}

export default Header;