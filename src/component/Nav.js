import React from 'react'
import { Link} from "react-router-dom";
import '../css/nav.css'

export default function Nav() {
  return (
    <div>
      <ul class="nav justify-content-center">
  <li class="nav-item">
    <Link class="nav-link active" to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Works">Works</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/About">About</Link>
  </li>
</ul>
    </div>
  )
}
