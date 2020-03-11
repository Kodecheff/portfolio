import React from 'react'
import { Link} from "react-router-dom";

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
  {/* <li class="nav-item">
    <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
  </li> */}
</ul>
    </div>
  )
}
