import React from 'react'
import { Link } from 'react-router-dom';


function Navbar () {

  return(
  <nav className="navbar navbar-dark bg-primary">
    <a className="navbar-brand" href="#">Mi Portafolio</a>
    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="navbar-collapse collapse" id="navbarsExample01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to="/">
          <a className="nav-link" href="#">Obout  Me<span className="sr-only">(current)</span></a>
          </Link>
        </li>
        <li className="nav-item">
        <Link to="/content">
          <a className="nav-link" href="#">Mis proyectos</a>
        </Link>
        </li>
        <li className="nav-item">
        <Link to="/contact">
           <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contáctame</a>
        </Link>
        </li>
      </ul>
    </div>
  </nav>
  
);
}



export default Navbar;